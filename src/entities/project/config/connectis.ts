import type { ProcessStep } from '../model/types';

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
    image: `${M}/hero.jpg`,
    imageAlt: 'CONNECTIS — dashboard viewed from inside a fleet vehicle',
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
      image: `${M}/process/step1-what.jpg`,
      imageAlt:
        'Research deliverables: market research, user personas, journey mapping, problem framing',
      body: 'Accelerated market research, user personas, journey mapping, and problem framing using AI. Compressed discovery and scoping from months to days without sacrificing depth.',
    },
    {
      number: '02',
      title: 'Tokenized Design System and Architecture',
      image: `${M}/process/step2-what.jpg`,
      imageAlt:
        'A hybrid analog-digital workflow across Pencil & Paper, FigJam, Figma, Claude, and UX Pilot',
      body: 'Built sitemaps, user stories, and lo-fi wireframes into a high-fidelity Figma component library with Level-II token architecture for light and dark modes. Delivered a systematic design foundation structured for fast, accurate AI translation.',
    },
    {
      number: '03',
      title: 'Figma-to-Claude Integration and Documentation',
      image: `${M}/process/step3-what.jpg`,
      imageAlt: 'Figma layouts translated into a structured data graph for Claude',
      body: 'Used Claude to parse Figma layouts, design tokens, and visual direction directly. Automated generation of PRDs, user flows, and precise UI reference specs from a single source of truth.',
    },
    {
      number: '04',
      title: 'AI-assisted Build and PoC Delivery',
      image: `${M}/process/step4-what.jpg`,
      imageAlt:
        'Claude Code building the CONNECTIS dashboard, live preview alongside the terminal session',
      body: 'Fed design data straight into code-generation pipelines for instant iteration, then immediately usability-tested the output. Replaced slow handoffs to build and validate a working PoC in record time.',
    },
  ] satisfies ProcessStep[],
  interstitial: {
    eyebrow: 'Deliverables',
    headline: ['A design system, shipped as a working product.'],
    image: `${M}/interstitial.jpg`,
    imageAlt: 'CONNECTIS design system documentation',
  },
  brandDevelopment: {
    heading: 'Brand Development',
    image: `${M}/brand-development.jpg`,
    imageAlt: 'CONNECTIS brand identity — Michroma wordmark and network mark',
    text: 'The identity is built on geometric precision: a Michroma wordmark, zero decoration, and a network mark where every dot connects to the next — one connected fleet, not a scattered list of vehicles.',
  },
  designSystem: {
    heading: 'Design System',
    image: `${M}/design-system.jpg`,
    imageAlt: 'CONNECTIS two-tiered design token architecture',
    text: 'A streamlined adaptation of classic Material Design principles utilizing a strict 2-tiered architecture. The system organizes design primitives into two core collections: a foundational reference layer and a semantic layer.',
  },
  build: {
    sitemapImage: `${M}/sitemap.png`,
    caption:
      'Three dependency vulnerabilities patched. Full auth and role-based access, sign-in to sign-out.',
    stats: [
      { value: '394', label: 'Commits, One Month' },
      { value: '76KB', label: 'Initial JS Bundle' },
    ],
  },
  gallery: [`${M}/gallery-1.jpg`, `${M}/gallery-2.jpg`, `${M}/gallery-3.jpg`, `${M}/gallery-4.jpg`],
  retrospective: {
    heading: "What I've Learned",
    text: 'I learned how fast a working proof of concept comes together when AI carries the handoff. Feeding Figma layouts and tokens straight into Claude Code turned weeks of translation into days, and let me test a real interface instead of a slide deck. The lesson: treat AI as part of the process, not a shortcut around it.',
    behanceUrl: 'https://www.behance.net/gallery/251016127/',
  },
};
