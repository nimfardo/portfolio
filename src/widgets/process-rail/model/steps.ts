import type { IconName } from '@shared/ui';

/** One step of the 12-step AI-design workflow.
 *
 * `outputs` are the real artifacts each step commits to the repo. They render
 * as plain middot-separated text, not pills — see ProcessRail for why. */
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
 * Figma library and out of the code icon set. */
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
    outputs: ['sitemap.md', 'navigation.md', 'mermaid'],
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
    outputs: ['3 concepts'],
  },
  {
    number: '07',
    title: 'UI Assembly',
    icon: 'layers',
    action: 'Inject real graphics and icons into the chosen concept, straight from the workspace.',
    outputs: ['UI screens'],
  },
  {
    number: '08',
    title: 'Design Tokens',
    icon: 'tokens',
    action: 'Extract colour, type and spacing from the concept code into structured variables.',
    outputs: ['tokens.css', '5–7 components'],
  },
  {
    number: '09',
    title: 'Living Design System',
    icon: 'system',
    action: 'Compile components into a living, code-based style guide — the single source of truth.',
    outputs: ['HTML docs site'],
  },
  {
    number: '10',
    title: 'Responsiveness',
    icon: 'responsive',
    action: 'Prompt layout transformations and breakpoint behaviour mathematically, without manual resizing.',
    outputs: ['Mobile', 'Tablet', 'Desktop'],
  },
  {
    number: '11',
    title: 'Motion & Micro-interactions',
    icon: 'motion',
    action: 'Apply one animation language — timing, easing, sequencing — across the whole system.',
    outputs: ['Animated states'],
  },
  {
    number: '12',
    title: 'Handoff & Developer Docs',
    icon: 'code',
    action: 'Generate the whole handoff package automatically, straight from the repo files.',
    outputs: ['README.md', '/handoff'],
  },
];
