import { build, defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vuePlugin(),
  ],
  build: {
    lib: {
      entry: 'resources/js/vue/app.js',
      name: 'RavennaTranslateVue',
      fileName: 'ravenna-translate-vue',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      }
    }
  }
});