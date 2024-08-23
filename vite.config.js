import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      formats: ['es'],
    },
  },
});
