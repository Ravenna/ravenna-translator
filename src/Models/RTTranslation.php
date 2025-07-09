<?php

namespace Ravenna\Translate\Models;

use Illuminate\Database\Eloquent\Model;

class RTTranslation extends Model
{
    protected $table = 'r_t_translations';

    public function languageRegion()
    {
        return $this->belongsTo(RTLanguageRegion::class);
    }
}
