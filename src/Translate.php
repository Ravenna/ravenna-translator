<?php

namespace Ravenna\Translate;

use Illuminate\Support\Facades\Cache;
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
                Log::error('Invalid locale provided: ' . $locale);
                return;
            }

            $this->locale = $thisLocale['language'] . '-' . $thisLocale['region'];
        } else {
            $this->locale = \Locale::acceptFromHttp(request()->header('Accept-Language'));

            if (!$this->locale) {
                Log::error('No locale provided and unable to determine from request.');
                return;
            }
        }

        $this->dbLocale = RTLanguageRegion::find($this->locale);

        if (!$this->dbLocale) {
            $this->dbLocale = RTLanguageRegion::create(['id' => $this->locale]);
        }
    }

    public function translate(string $text): string
    {
        if (!$this->locale || strlen($text) <= 1) {
            return $text;
        }

        $cacheKey = self::generateCacheKey($this->locale, $text);

        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        }

        $dbKey = self::generateDbKey($this->locale, $text);

        $translation = RTTranslation::where('key', $dbKey)->first();

        if (!$translation) {
            return $this->wrapText($text);
        }

        Cache::put($cacheKey, $translation->value, now()->addDays(self::CACHE_TTL));

        return $translation->value;
    }

    public static function generateCacheKey(string $locale, string $text): string
    {
        return self::CACHE_PREFIX . self::generateDbKey($locale, $text);
    }

    public static function generateDbKey(string $locale, string $text): string
    {
        return md5($locale . $text);
    }

    protected function wrapText(string $text): string
    {
        return '<span data-translate="1" data-translate-key="' . self::generateDbKey($this->locale, $text) . '">' . $text . '</span>';
    }
}
