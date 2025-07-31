<?php

namespace Ravenna\Translate;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Ravenna\Translate\Models\RTLanguageRegion;
use Ravenna\Translate\Models\RTTranslation;

class Translate
{
    const CACHE_PREFIX = 'ravenna_translate_';
    const CACHE_TTL = 30; // days

    protected $locale;
    protected $dbLocale;

    public function __construct(string $locale = '')
    {
        if ($locale) {
            $thisLocale = \Locale::parseLocale(trim($locale));

            if (!$thisLocale) {
                throw new \Exception('Invalid locale format: ' . $locale);
            }

            $this->locale = $thisLocale['language'];

            if (isset($thisLocale['region'])) {
                $this->locale .= '-' . strtoupper($thisLocale['region']);
            }
        } else {
            $this->locale = \Locale::acceptFromHttp(request()->header('Accept-Language'));

            if (!$this->locale) {
                throw new \Exception('No locale provided and unable to determine from request.');
            }
        }

        $this->dbLocale = RTLanguageRegion::where('language_region', $this->locale)->first();

        if (! $this->dbLocale) {
            $this->dbLocale = RTLanguageRegion::create(['language_region' => $this->locale]);
        }
    }

    public function translate(array $texts): array
    {
        if (!$this->locale) {
            throw new \Exception('Locale not set. Please provide a valid locale.');
        }

        if (empty($texts)) {
            throw new \Exception('No texts provided for translation.');
        }

        $texts = collect($texts);

        $translatedTexts = [];
        $untranslatedTexts = [];

        $texts->each(function ($text) use (&$translatedTexts, &$untranslatedTexts) {
            $dbKey = self::generateDbKey($this->locale, $text);
            $cacheKey = self::generateCacheKey($this->locale, $dbKey);

            if (Cache::has($cacheKey)) {
                $translatedTexts[] = [
                    'key' => $dbKey,
                    'value' => Cache::get($cacheKey)
                ];

                return;
            }

            $translation = RTTranslation::where('key', $dbKey)
                ->where('language_region_id', $this->dbLocale->id)
                ->first();

            if (!$translation) {
                $untranslatedTexts[] = [
                    'key' => $dbKey,
                    'value' => $text
                ];

                return;
            }

            Cache::put($cacheKey, $translation->value, now()->addDays(self::CACHE_TTL));

            $translatedTexts[] = [
                'key' => $dbKey,
                'value' => $translation->value
            ];
        });

        if (!empty($untranslatedTexts)) {
            $fetchedTranslations = $this->fetchTranslationFromExternalService($untranslatedTexts);

            RTTranslation::upsert(
                collect($fetchedTranslations)->map(function ($translation) {
                    return [
                        'key' => $translation['key'],
                        'value' => $translation['value'],
                        'language_region_id' => $this->dbLocale->id,
                    ];
                })->toArray(),
                ['key', 'language_region_id'], // Unique keys
                ['value'] // Fields to update
            );

            collect($fetchedTranslations)->each(function ($translation) {
                $cacheKey = self::generateCacheKey($this->locale, $translation['key']);
                Cache::put($cacheKey, $translation['value'], now()->addDays(self::CACHE_TTL));
            });

            $translatedTexts = array_merge($translatedTexts, $fetchedTranslations);
        }

        return $translatedTexts;
    }

    public static function generateCacheKey(string $locale, string $key): string
    {
        return self::CACHE_PREFIX . self::generateDbKey($locale, $key);
    }

    public static function generateDbKey(string $locale, string $text): string
    {
        return rt_text_key($locale, $text);
    }

    protected function wrapText(string $text): string
    {
        return rt_wrap_text($text);
    }

    protected function fetchTranslationFromExternalService(array $texts): ?array
    {
        $externalServiceUrl = config('ravenna-translate.translation-external-api.url');
        $externalServiceEndpoint = config('ravenna-translate.translation-external-api.endpoint', '/api');

        $response = Http::post($externalServiceUrl . $externalServiceEndpoint . '/translate', [
            'lang' => $this->locale,
            'texts' => $texts,
        ]);

        if ($response->successful()) {
            return $response->json('translated_texts', []);
        } else {
            Log::error('External translation service error', [
                'locale' => $this->locale,
                'texts' => $texts,
                'response' => $response->body(),
            ]);
        }

        return [];
    }
}
