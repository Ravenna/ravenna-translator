<?php

if (!function_exists('ravenna_translate')) {
    function ravenna_translate(string $text)
    {
        return app('translate')->translate($text);
    }
}

if (!function_exists('rt')) {
    function rt(string $text)
    {
        return ravenna_translate($text);
    }
}
