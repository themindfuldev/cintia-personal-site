import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import { targetBlank } from './src/plugins/targetBlank';

export default defineConfig({
  // used to generate images
  site: 'https://cintiaromero.com/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
  markdown: {
    rehypePlugins: [[targetBlank, { domain: 'cintiaromero.com' }]],
  },
});
