<?php

namespace Ravenna\Translate\View\Components;

use Illuminate\Support\Facades\Vite;
use Illuminate\View\Component;
use Ravenna\Translate\TranslateServiceProvider;

class RtScripts extends Component
{
    public function render()
    {
        $glob = glob(TranslateServiceProvider::ASSET_DIR . '*.js');

        $string = array_reduce($glob, function ($carry, $item) {
            return $carry . '<script src="' . asset(TranslateServiceProvider::PUBLIC_DIR . basename($item)) . '"></script>';
        }, '');

        return $string;
    }
}
