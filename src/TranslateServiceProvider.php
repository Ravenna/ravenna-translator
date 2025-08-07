<?php

namespace Ravenna\Translate;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Ravenna\Translate\View\Components\RtScripts;

use function Pest\Laravel\json;

class TranslateServiceProvider extends ServiceProvider
{
    const ROOT_DIR = __DIR__ . '/../';
    const ASSET_DIR = self::ROOT_DIR . 'public/ravenna/translate';
    const PUBLIC_DIR = 'ravenna/translate';

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
        $this->rtBlade();
    }

    protected function rtPublishes()
    {
        $this->publishes([
            self::ASSET_DIR => public_path(self::PUBLIC_DIR),
        ], 'public');

        $this->publishes([
            __DIR__ . '/../public/ravenna/translate' => public_path('ravenna/translate'),
        ], 'rt-assets');

        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');

        $this->loadRoutesFrom(__DIR__ . '/../routes/api.php');
    }

    protected function rtBlade()
    {
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'translate');
        Blade::componentNamespace('Ravenna\\Translate\\View\\Components', 'translate');
        Blade::directive('rtScripts', function (string $defaultLanguage) {
            // replace all single quotes with double quotes for json compatibility
            $defaultLanguage = str_replace("'", '"', $defaultLanguage);
            $defaultLanguage = json_decode($defaultLanguage, true);

            // If json_decode fails, it will return null, which fails gracefully
            $component = new RtScripts($defaultLanguage);
            return $component->render();
        });
    }
}
