import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL('.', import.meta.url).pathname,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        project: 'project.html',
      },
    },
  },
});
