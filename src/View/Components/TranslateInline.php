<?php

namespace Ravenna\Translate\View\Components;

use Illuminate\Support\Facades\Vite;
use Illuminate\View\Component;
use Ravenna\Translate\Models\RTLanguageRegion;
use Ravenna\Translate\Models\RTTranslation;
use Ravenna\Translate\TranslateServiceProvider;

class TranslateInline extends Component
{
    public function __construct(
        public string $text
    ) {}

    public function render()
    {
        if (empty($this->text)) {
            return $this->text;
        }

        $locale = app()->getLocale();
        $localeDb = RTLanguageRegion::firstOrCreate([
            'language_region' => $locale,
        ]);

        $translationKey = rt_text_key($locale, $this->text);

        $translation = RTTranslation::where('key', $translationKey)->first();

        if (!$translation) {
            return rt_wrap_text($this->text);
        }

        return $translation->value ?? rt_wrap_text($this->text);
    }
}
