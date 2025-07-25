<?php

namespace Ravenna\Translate;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Ravenna\Translate\View\Components\RtScripts;

class TranslateServiceProvider extends ServiceProvider
{
    const ROOT_DIR = __DIR__ . '/../';
    const ASSET_DIR = self::ROOT_DIR . 'public/build/assets/';
    const PUBLIC_DIR = 'ravenna/translate/';

    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../config/ravenna-translate.php',
            'ravenna-translate'
        );

        $this->app->bind('translate', function () {
            return new Translate();
        });
    }

    public function boot()
    {
        require_once __DIR__ . '/functions.php';

        $this->rTPublishes();
        $this->rtBladeComponents();
    }

    protected function rtPublishes()
    {
        $this->publishes([
            __DIR__ . '/../config/ravenna-translate.php' => config_path('ravenna-translate.php'),
        ], 'rt-config');

        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');

        $this->loadRoutesFrom(__DIR__ . '/../routes/api.php');
    }

    protected function rtBladeComponents()
    {
        Blade::component('rt-scripts', RtScripts::class);
    }
}
