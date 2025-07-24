<?php

namespace Ravenna\Translate\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RTLanguageRegion extends Model
{
    use HasFactory;

    protected $table = 'r_t_language_regions';

    protected $fillable = [
        'language_region',
    ];
}
