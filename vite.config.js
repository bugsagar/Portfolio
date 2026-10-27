import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Serve /work (no trailing slash) from work/index.html, matching the Vercel rewrite.
const workRoute = () => {
  const rewrite = (req, _res, next) => {
    if (/^\/work(\?|$)/.test(req.url)) req.url = req.url.replace('/work', '/work/');
    next();
  };
  return {
    name: 'work-route',
    configureServer: (server) => { server.middlewares.use(rewrite); },
    configurePreviewServer: (server) => { server.middlewares.use(rewrite); },
  };
};

export default defineConfig({
  plugins: [react(), workRoute()],
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
        work: 'work/index.html',
      },
    },
  },
});
