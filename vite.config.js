import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Mirror the Vercel rewrites: /work -> work/index.html, /work/<slug> -> case-study/index.html.
const workRoute = () => {
  const rewrite = (req, _res, next) => {
    if (/^\/work(\?|$)/.test(req.url)) req.url = req.url.replace('/work', '/work/');
    else if (/^\/work\/[\w-]+\/?(\?|$)/.test(req.url)) req.url = '/case-study/index.html';
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
        caseStudy: 'case-study/index.html',
      },
    },
  },
});
