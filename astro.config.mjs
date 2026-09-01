// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Fully static output — Netlify serves dist/ directly, no adapter needed.
// (@astrojs/netlify is only for hybrid/server on-demand rendering, which this
// site doesn't use; adding it forced server mode + Netlify Blobs sessions we
// don't want. Revisit only if a route needs on-demand rendering later.)
export default defineConfig({
  output: 'static',
  // docs-007 (2026-08-23) planned the apex as an alias redirecting to a
  // `max.` subdomain — that subdomain was never actually given a DNS record.
  // Max confirmed 2026-09-01 the real, live address is the bare apex,
  // shturma.com (Netlify-connected, serving correctly) — this is that
  // correction, not the original plan. Powers absolute-URL generation
  // (canonical/OG tags; no sitemap yet).
  site: 'https://shturma.com',
  // Local-DX preference: the dev toolbar is the floating pill Astro injects at
  // the bottom of every page in `astro dev`. It sits on top of the design and
  // makes it hard to judge the real thing. Dev-only either way — it is never
  // emitted into dist/, so this changes nothing about the deployed site.
  devToolbar: { enabled: false },
});
