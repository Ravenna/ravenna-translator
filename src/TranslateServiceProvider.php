<?php

namespace Ravenna\Translate;

use Illuminate\Support\ServiceProvider;

class TranslateServiceProvider extends ServiceProvider
{
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
        $this->rTPublishes();
    }

    protected function rTPublishes()
    {
        $this->publishes([
            __DIR__ . '/../config/ravenna-translate.php' => config_path('ravenna-translate.php'),
        ], 'rt-config');

        $this->publishesMigrations([
            __DIR__ . '/../database/migrations' => database_path('migrations'),
        ], 'rt-migrations');
    }
}
