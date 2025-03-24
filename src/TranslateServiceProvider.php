<?php

namespace Ravenna\Translate;

use Illuminate\Support\ServiceProvider;

class TranslateServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('translate', function () {
            return new Translate();
        });
    }

    public function boot()
    {
        //
    }
}
