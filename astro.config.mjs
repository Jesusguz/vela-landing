import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Jesusguz.github.io',
  base: '/vela-landing',
  integrations: [tailwind()],
});