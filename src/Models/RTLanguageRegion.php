<?php

namespace Ravenna\Translate\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RTLanguageRegion extends Model
{
    /** @use HasFactory<\Database\Factories\RTLanguageRegionFactory> */
    use HasFactory;

    protected $fillable = [
        'id',
    ];
}
