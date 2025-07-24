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
        Schema::create('r_t_translations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('language_region_id')->constrained('r_t_language_regions');
            $table->string('key', 255)->index();
            $table->text('value');
            $table->timestamps();
            $table->unique(['language_region_id', 'key'], 'r_t_translations_unique_key');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('r_t_translations');
    }
};
