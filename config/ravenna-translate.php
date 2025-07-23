<?php

return [
    "web" => [
        "prefix" => "translate",
    ],
    'translation-external-api' => [
        'url' => env('TRANSLATION_EXTERNAL_API_URL', 'https://translator.ravennainteractive.com'),
        'key' => env('TRANSLATION_EXTERNAL_API_KEY', 'your-api-key-here'),
    ],
];
