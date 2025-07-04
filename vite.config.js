import { build, defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    laravel({
      hotFile: 'public/translate.hot', // Most important lines
      input: ['resources/js/app.js'],
      refresh: true,
    }),
    vuePlugin(),
  ],
});