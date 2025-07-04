<?php

namespace Ravenna\Translate\Models;

use Illuminate\Database\Eloquent\Model;

class RTTranslation extends Model
{
    public function languageRegion()
    {
        return $this->belongsTo(RTLanguageRegion::class);
    }
}
