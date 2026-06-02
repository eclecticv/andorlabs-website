import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://andorlabs.ca',
  // astro-icon renders Lucide glyphs as inline SVG at BUILD time (no runtime JS).
  // React is used ONLY for the dev-only Agentation feedback island.
  integrations: [icon({ iconDir: 'src/icons' }), react()],
  // Tailwind v4 is wired via its Vite plugin (no tailwind.config.js in v4).
  vite: {
    plugins: [tailwindcss()],
  },
  // honor portless-injected PORT/HOST so the proxy hits the right server
  server: {
    host: process.env.HOST || true,
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
});
