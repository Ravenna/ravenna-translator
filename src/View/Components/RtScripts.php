<?php

namespace Ravenna\Translate\View\Components;

use Illuminate\Support\Facades\Vite;
use Illuminate\View\Component;
use Ravenna\Translate\Translate;
use Ravenna\Translate\TranslateServiceProvider;

class RtScripts extends Component
{
    public function render()
    {
        $path = public_path(TranslateServiceProvider::PUBLIC_DIR . '/assets');
        $glob = glob($path . '/*.js');

        $string = array_reduce($glob, function ($carry, $item) use ($path) {
            return $carry . '<script src="' . asset(TranslateServiceProvider::PUBLIC_DIR . '/assets/' . basename($item)) . '"></script>';
        }, '');

        return $string;
    }
}
