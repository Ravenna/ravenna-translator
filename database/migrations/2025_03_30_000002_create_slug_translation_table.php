<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('r_t_slug_translation', function (Blueprint $table) {
            $table->id();
            $table->foreignId('translation_id')->constrained('r_t_translations');
            $table->string('slug', 255)->index();
            $table->text('value');
            $table->unique(['slug', 'translation_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('r_t_slug_translation');
    }
};
