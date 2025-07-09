<?php

namespace Ravenna\Translate\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Log;
use Ravenna\Translate\Models\RTTranslation;
use Ravenna\Translate\Requests\TranslateRequest;
use Ravenna\Translate\Translate;

class TranslationController extends Controller
{
    public function store(TranslateRequest $request)
    {
        $validated = $request->validated();
        $texts = $validated['texts'];
        $region = $validated['lang'] ?? null;

        try {
            $translator = new Translate($region);
            $translations = $translator->translate($texts);

            return response()->json([
                'success' => true,
                'translations' => $translations,
                'region' => $region,
            ]);
        } catch (\Exception $e) {
            Log::error('Translation error: ' . $e->getMessage(), [
                'texts' => $texts,
                'region' => $region,
            ]);

            // Handle the exception, log it, or return an error response
            return response()->json([
                'success' => false,
                'error' => 'Translation not found'
            ], 404);
        }
    }
}
