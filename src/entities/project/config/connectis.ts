import type { GalleryRow, ProcessStep } from '../model/types';

// Content pulled from the live Figma canvas (Project Page/CONNECTIS
// (Revised), node 2165:2), not reference/content/copy-deck.md — the two
// have drifted (see STATE.md Known Issues); canvas is the source of truth.

const M = '/media/connectis';

export const connectis = {
  slug: 'connectis',
  name: 'CONNECTIS',
  // Figma dropped the hero's tags/eyebrow/headline card — it's now a bare
  // image + scroll cue. The "Challenge" eyebrow/headline that used to live
  // here moves to its own ContentSection-style block in Task 3, sourced
  // fresh from canvas rather than carried over guessed.
  hero: {
    image: `${M}/hero.png`,
    imageAlt:
      'CONNECTIS fleet dashboard UI on a tablet — European vehicle map, health score, and action-needed queue',
  },
  overview: {
    heading: 'Project Overview',
    text: 'CONNECTIS is a command center for fleet operators — one dashboard replacing spreadsheets and phone calls.',
    tags: ['Logistics', 'Solo designer', 'brand · ux', '2026'],
  },
  process: [
    {
      number: '01',
      title: 'AI-driven Product Strategy and Framing',
      media: {
        type: 'image',
        image: `${M}/process/step1-what.jpg`,
        imageAlt:
          'Research deliverables: market research, user personas, journey mapping, problem framing',
      },
      body: 'Accelerated market research, user personas, journey mapping, and problem framing using AI. Compressed discovery and scoping from months to days without sacrificing depth.',
    },
    {
      number: '02',
      title: 'Tokenized Design System and Architecture',
      media: {
        type: 'video',
        src: `${M}/process/step2-what.webm`,
        poster: `${M}/process/step2-what-poster.jpg`,
        alt: 'Hand-sketching CONNECTIS\'s lo-fi wireframes on paper — dashboard, analytics and reports, vehicles, and settings screens — next to a laptop',
      },
      body: 'Built sitemaps, user stories, and lo-fi wireframes into a high-fidelity Figma component library with Level-II token architecture for light and dark modes. Delivered a systematic design foundation structured for fast, accurate AI translation.',
    },
    {
      number: '03',
      title: 'Figma-to-Claude Integration and Documentation',
      media: {
        type: 'image',
        image: `${M}/process/step3-what.jpg`,
        imageAlt: 'Figma layouts translated into a structured data graph for Claude',
      },
      body: 'Used Claude to parse Figma layouts, design tokens, and visual direction directly. Automated generation of PRDs, user flows, and precise UI reference specs from a single source of truth.',
    },
    {
      number: '04',
      title: 'AI-assisted Build and PoC Delivery',
      media: {
        type: 'image',
        image: `${M}/process/step4-what.jpg`,
        imageAlt:
          'Claude Code building the CONNECTIS dashboard, live preview alongside the terminal session',
      },
      body: 'Fed design data straight into code-generation pipelines for instant iteration, then immediately usability-tested the output. Replaced slow handoffs to build and validate a working PoC in record time.',
    },
  ] satisfies ProcessStep[],
  // Figma's old "Deliverables" eyebrow/headline interstitial banner ("A
  // design system, shipped as a working product.") is gone — replaced by
  // the Challenge block below (real content, not a banner) and the merged
  // Deliverables section immediately after it.
  challenge: {
    heading: 'Challenge',
    image: `${M}/challenge.jpg`,
    imageAlt: 'CONNECTIS — a fleet operations manager in a glass-walled meeting room',
    text: 'Transform fragmented data into prioritized actions to prevent downtime.',
  },
  // Brand Development + Design System used to be two separately-headed
  // sections; Figma merged them under one "Deliverables" heading with both
  // image+caption blocks stacked underneath.
  deliverables: {
    heading: 'Deliverables',
    blocks: [
      {
        image: `${M}/brand-development.jpg`,
        imageAlt: 'CONNECTIS brand identity — Michroma wordmark and network mark',
        text: 'Geometric precision: a Michroma wordmark, zero decoration, one connected network mark for the fleet.',
      },
      {
        image: `${M}/design-system.jpg`,
        imageAlt: 'CONNECTIS two-tiered design token architecture',
        text: 'A 2-tiered token system — a foundational reference layer feeding a semantic layer built for the product.',
      },
    ],
  },
  build: {
    sitemapImage: `${M}/sitemap.png`,
    caption:
      'Three dependency vulnerabilities patched. Full auth and role-based access, sign-in to sign-out.',
    stats: [
      { value: '394', label: 'Commits, One Month' },
      { value: '76', unit: 'KB', label: 'Initial JS Bundle' },
    ],
  },
  video: {
    src: `${M}/sign-in-dashboard.webm`,
    poster: `${M}/sign-in-dashboard-poster.jpg`,
    alt: 'CONNECTIS product walkthrough — sign-in screen through to the fleet dashboard',
  },
  // gallery-1.jpg (the old lead shot) was the same sign-in scene the video
  // above now opens on -- dropped to avoid showing that shot twice on the
  // page (2026-07-28).
  gallery: [
    { type: 'split', tall: `${M}/gallery-2.jpg`, stack: [`${M}/gallery-3.jpg`, `${M}/gallery-4.jpg`] },
  ] satisfies GalleryRow[],
  retrospective: {
    heading: "What I've Learned",
    text: 'The lesson: treat AI as part of the process, not a shortcut around it.',
    behanceUrl: 'https://www.behance.net/gallery/251016127/',
  },
};
