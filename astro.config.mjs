// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Fully static output — Netlify serves dist/ directly, no adapter needed.
// (@astrojs/netlify is only for hybrid/server on-demand rendering, which this
// site doesn't use; adding it forced server mode + Netlify Blobs sessions we
// don't want. Revisit only if a route needs on-demand rendering later.)
export default defineConfig({
  output: 'static',
  // Canonical domain decided in docs-007 (2026-08-23): shturma.com
  // registered, site lives at the max subdomain. Powers absolute-URL
  // generation (sitemap, canonical/OG tags) once those exist — Astro just
  // warns without it today, nothing consumes it yet.
  site: 'https://max.shturma.com',
  // Local-DX preference: the dev toolbar is the floating pill Astro injects at
  // the bottom of every page in `astro dev`. It sits on top of the design and
  // makes it hard to judge the real thing. Dev-only either way — it is never
  // emitted into dist/, so this changes nothing about the deployed site.
  devToolbar: { enabled: false },
});
