<?php

use Illuminate\Support\Facades\Route;
use Ravenna\Translate\Controllers\TranslationController;

Route::middleware(['api'])
    ->controller(TranslationController::class)
    ->prefix('/translations-api/v1')
    ->name('translations.')
    ->group(function () {
        Route::post('/', 'store')->name('translate');
    });
