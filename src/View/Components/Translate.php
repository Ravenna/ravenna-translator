<?php

namespace Ravenna\Translate\View\Components;

use Illuminate\Support\Facades\Vite;
use Illuminate\View\Component;
use Ravenna\Translate\Models\RTLanguageRegion;
use Ravenna\Translate\Models\RTTranslation;
use Ravenna\Translate\TranslateServiceProvider;

class Translate extends Component
{
    public function __construct(
        public string $element = 'div'
    ) {}

    public function render()
    {
        return view('translate::translate');
    }
}
