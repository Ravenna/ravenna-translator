<?php

namespace Ravenna\Translate\View\Components;

use Illuminate\Support\Facades\Vite;
use Illuminate\View\Component;
use Ravenna\Translate\Translate;
use Ravenna\Translate\TranslateServiceProvider;

class RtScripts extends Component
{
    protected array $defaultLanguage = [];

    public function __construct(string | array | null $defaultLanguage = [])
    {
        if (is_string($defaultLanguage) || is_null($defaultLanguage)) {
            $defaultLanguage = empty($defaultLanguage) ? [] : [$defaultLanguage];
        }

        $systemDefaultLanguage = config('ravenna-translate.default_language');

        if (is_string($systemDefaultLanguage) && !empty($systemDefaultLanguage)) {
            $systemDefaultLanguage = [$systemDefaultLanguage];
        } else if (!is_array($systemDefaultLanguage)) {
            $systemDefaultLanguage = [];
        }

        $this->defaultLanguage = array_merge($defaultLanguage, $systemDefaultLanguage);
    }

    public function render()
    {
        $string = '<script>window._ravennaTranslate = {
            defaultLanguages: [],
            translating: {},
        };';

        if (! empty($this->defaultLanguage)) {
            foreach ($this->defaultLanguage as $lang) {
                $string .= 'window._ravennaTranslate.defaultLanguages.push("' . $lang . '");';
            }
        }

        $string .= '</script>';

        $path = public_path(TranslateServiceProvider::PUBLIC_DIR . '/assets');
        $glob = glob($path . '/*.js');

        $string .= array_reduce($glob, function ($carry, $item) use ($path) {
            return $carry . '<script src="' . asset(TranslateServiceProvider::PUBLIC_DIR . '/assets/' . basename($item)) . '"></script>';
        }, '');

        return $string;
    }
}
