import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  // Use root during development so the dev server serves at '/'
  // and use the repo subpath for production builds (GitHub Pages).
  base: process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/Peersync/' : '/'),
});
