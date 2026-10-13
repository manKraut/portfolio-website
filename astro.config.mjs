// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with your real domain (used for canonical URLs / social cards)
  site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
