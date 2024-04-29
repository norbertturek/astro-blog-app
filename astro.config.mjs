import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // adapter: Astro.Adapters.auto(), // Or your preferred adapter (e.g., Astro.Adapters.netlify())
  site: 'https://astro-blog-cip.netlify.app',
  integrations: [tailwind(), sitemap()]
});