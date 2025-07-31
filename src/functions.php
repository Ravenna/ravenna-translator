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

if (!function_exists('rt_text_key')) {
    function rt_text_key(string $locale, string $text)
    {
        return md5($locale . $text);
    }
}

if (!function_exists('rt_wrap_text')) {
    function rt_wrap_text(string $text)
    {
        return '<span data-rt_translate="1">' . $text . '</span>';
    }
}
