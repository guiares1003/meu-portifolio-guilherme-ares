import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// `npm run build`         -> pasta dist/ para hospedar (Vercel, Netlify, GitHub Pages…)
// `npm run build:single`  -> um único index.html com tudo embutido
export default defineConfig({
  base: './',
  plugins: [react(), ...(process.env.SINGLE ? [viteSingleFile()] : [])],
});
