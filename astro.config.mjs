// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Fully static output — Netlify serves dist/ directly, no adapter needed.
// (@astrojs/netlify is only for hybrid/server on-demand rendering, which this
// site doesn't use; adding it forced server mode + Netlify Blobs sessions we
// don't want. Revisit only if a route needs on-demand rendering later.)
export default defineConfig({
  output: 'static',
});
