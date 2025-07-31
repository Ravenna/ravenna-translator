import { build, defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      hotFile: 'public/ravenna/translate/translate.hot', // Most important lines
      buildDirectory: 'ravenna/translate', // Most important lines
      input: ['resources/js/main.js'],
      refresh: true,
    }),
  ],
});