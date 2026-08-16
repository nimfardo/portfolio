import type { IconName } from '@shared/ui';

/** One step of the 12-step AI-design workflow.
 *
 * `outputs` are the real artifacts each step commits to the repo, and they are
 * deliberately one vocabulary: a file (`name.ext`) or a directory (`/name`),
 * never a description. The lead's claim is that nothing is ever exported, and
 * a filename is what backs that — "3 concepts" or "HTML docs site" restated
 * the step's own title instead (copy-018).
 *
 * NOTE for Max: five of these names are inferred rather than taken from your
 * repos — `/concepts`, `/screens`, `/styleguide`, `breakpoints.css`,
 * `motion.css`. Correct any that don't match what you actually produce; they
 * are one-line edits here and on canvas. `flows.mmd` follows the real `.mmd`
 * files in reference/design-system/diagrams/. */
export interface ProcessStepItem {
  /** Zero-padded; shown small above the title and in the step counter. */
  number: string;
  title: string;
  icon: IconName;
  /** The one-line "what I actually do" shown in the detail panel. */
  action: string;
  outputs: string[];
}

/** Content comes from Max directly (2026-08-15), not copy-deck.md — the deck
 * has no Process entry at all.
 *
 * Deliberately 12 steps, not the 14 the earlier Figma grid carried: the
 * workflow is named "The 12-Step AI-Design Workflow", and the old `Claude Code
 * Setup` (00) and `Retrospective` (13) were dropped. `icon/terminal` and
 * `icon/retro` were built for those two and are now unused — they stay in the
 * Figma library and out of the code icon set.
 *
 * comp-012 redrew three of these glyphs. `sitemap`, `palette` and `code` were
 * the ones comp-011 found already in Figma and reused instead of building to
 * the new construction, so they were the only three that never got the set's
 * 2px outline treatment — which is exactly the three Max picked out by eye.
 * `code` became `handoff`: step 12 produces documentation *about* code, and a
 * key named for the wrong thing is how the next person gets misled. */
export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Research & Benchmarking',
    icon: 'search',
    action: 'Set up the project repo and automate competitor analysis.',
    outputs: ['README.md', 'research.md'],
  },
  {
    number: '02',
    title: 'Personas & JTBD',
    icon: 'personas',
    action: 'Extract data-driven personas and user jobs straight from the research file. No guessing.',
    outputs: ['personas.md', 'jtbd.md'],
  },
  {
    number: '03',
    title: 'Information Architecture',
    icon: 'sitemap',
    action: 'Translate jobs and personas into flows and structural maps in code, not Figma.',
    outputs: ['sitemap.md', 'navigation.md', 'flows.mmd'],
  },
  {
    number: '04',
    title: 'Wireframing',
    icon: 'wireframe',
    action: 'Build semantic, interactive HTML wireframes covering every state early.',
    outputs: ['/wireframes'],
  },
  {
    number: '05',
    title: 'Tone of Voice',
    icon: 'speech',
    action: 'Define a systemic copy guide, then populate every string in one sweep.',
    outputs: ['voice.md', 'microcopy.md'],
  },
  {
    number: '06',
    title: 'Visual Concept',
    icon: 'palette',
    action: 'Deconstruct references and build two or three directional moods directly in code.',
    outputs: ['/concepts'],
  },
  {
    number: '07',
    title: 'UI Assembly',
    icon: 'layers',
    action: 'Inject real graphics and icons into the chosen concept, straight from the workspace.',
    outputs: ['/screens'],
  },
  {
    number: '08',
    title: 'Design Tokens',
    icon: 'tokens',
    action: 'Extract colour, type and spacing from the concept code into structured variables.',
    outputs: ['tokens.css', '/components'],
  },
  {
    number: '09',
    title: 'Living Design System',
    icon: 'system',
    action: 'Compile components into a living, code-based style guide — the single source of truth.',
    outputs: ['/styleguide'],
  },
  {
    number: '10',
    title: 'Responsiveness',
    icon: 'responsive',
    action: 'Prompt layout transformations and breakpoint behaviour mathematically, without manual resizing.',
    outputs: ['breakpoints.css'],
  },
  {
    number: '11',
    title: 'Motion & Micro-interactions',
    icon: 'motion',
    action: 'Apply one animation language — timing, easing, sequencing — across the whole system.',
    outputs: ['motion.css'],
  },
  {
    number: '12',
    title: 'Handoff & Developer Docs',
    icon: 'handoff',
    action: 'Generate the whole handoff package automatically, straight from the repo files.',
    outputs: ['README.md', '/handoff'],
  },
];
