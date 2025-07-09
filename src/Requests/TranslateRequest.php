<?php

namespace Ravenna\Translate\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TranslateRequest extends FormRequest
{
    public function authorize()
    {
        return true; // Allow all requests for now
    }

    public function rules()
    {
        return [
            'lang' => 'nullable|string',
            'texts' => 'required|array',
            'texts.*' => 'string',
        ];
    }
}
