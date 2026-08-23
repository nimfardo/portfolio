import type { IconName } from '@shared/ui';

/** One step of the 16-step design workflow.
 *
 * `outputs` are the artifacts each step produces, and they are deliberately
 * one vocabulary: a file (`name.ext`) or a directory (`/name`), never a
 * description and never a tool. The lead's claim is that the workflow leaves
 * a full history of changes, and a filename is what backs that — "3 concepts"
 * or "HTML docs site" restated the step's own title instead (copy-018).
 *
 * The no-tool-names rule is Max's own call and it is what the tags mean:
 * `Figma` became `screens.fig`, `Netlify` became `/dist`, `Maze` became
 * `findings.md`. A step's *description* may still name a tool — step 10
 * mentions Jira — because the description says what happens; the tag says
 * what comes out.
 *
 * NOTE for Max: most of these names are generic workflow artifacts rather
 * than files read off a real repo. Only `sitemap.md`, `tokens.css` and
 * `/dist` exist here. Correct any that don't match what you actually produce;
 * they are one-line edits here and on canvas. `flows.mmd` follows the real
 * `.mmd` files in reference/design-system/diagrams/. */
export interface ProcessStepItem {
  /** Zero-padded; shown small above the title and in the step counter. */
  number: string;
  title: string;
  icon: IconName;
  /** The one-line "what I actually do" shown in the detail panel. */
  action: string;
  outputs: string[];
}

/** Content comes from Max's canvas (node 2839:4618, read 2026-08-23), not
 * from copy-deck.md — the deck has no current Process entry.
 *
 * Sixteen steps, up from twelve. The four that are new are 10 `Screens in
 * Figma`, 11 `Figma to Code`, 15 `Deploy to Netlify` and 16 `Usability
 * Testing`, and together they change what the page claims: the old twelve
 * ended at handoff docs and the lead said nothing is ever exported, so the
 * workflow stopped at the point where a design system existed. It now runs
 * through Figma screens, implementation, deploy and testing, and step 16
 * closes the loop back to step 10.
 *
 * That also retires the old `icon/terminal` and `icon/retro` note: terminal
 * is in use again at step 11, and retro is still unused (step 16 is `eye`).
 *
 * Six of the twelve surviving actions were reworded on canvas — 01 gained the
 * Figma MCP bridge, 02 dropped "data-driven", 03/05/06/07/12 were tightened.
 * They are transcribed verbatim, em dashes included; this file is not the
 * place to improve his English. */
export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Research & Benchmarking',
    icon: 'search',
    action: 'Set up the project repo and the Figma MCP bridge. Automate competitor analysis.',
    outputs: ['README.md', 'research.md'],
  },
  {
    number: '02',
    title: 'Personas & JTBD',
    icon: 'personas',
    action: 'Extract personas and user jobs straight from the research file. No guessing.',
    outputs: ['personas.md', 'jtbd.md'],
  },
  {
    number: '03',
    title: 'Information Architecture',
    icon: 'sitemap',
    action: 'Translate jobs and personas into flows and structural maps. In code, not Figma.',
    outputs: ['sitemap.md', 'navigation.md', 'flows.mmd'],
  },
  {
    number: '04',
    title: 'Wireframing',
    icon: 'wireframe',
    action: 'Build semantic, interactive HTML wireframes that cover every state early.',
    outputs: ['/wireframes'],
  },
  {
    number: '05',
    title: 'Tone of Voice',
    icon: 'speech',
    action: 'Define one copy guide, then write every string in a single sweep.',
    outputs: ['voice.md', 'microcopy.md'],
  },
  {
    number: '06',
    title: 'Visual Concept',
    icon: 'palette',
    action: 'Deconstruct references, then build two or three visual directions directly in code.',
    outputs: ['/concepts'],
  },
  {
    number: '07',
    title: 'UI Assembly',
    icon: 'layers',
    action: 'Drop real graphics and icons into the chosen concept, straight from the workspace.',
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
    action:
      'Compile components into a code-based style guide built on atomic design. One source of truth.',
    outputs: ['/styleguide'],
  },
  {
    number: '10',
    title: 'Screens in Figma',
    icon: 'frame',
    action:
      'Assemble screens from atoms, molecules and organisms. Link each one to its Jira ticket.',
    outputs: ['screens.fig'],
  },
  {
    number: '11',
    title: 'Figma to Code',
    icon: 'terminal',
    action: 'Implement the designs in code and iterate locally. Polish until it matches Figma 1:1.',
    outputs: ['index.html'],
  },
  {
    number: '12',
    title: 'Responsiveness',
    icon: 'responsive',
    action: 'Define breakpoint behaviour as rules, not by resizing frames by hand.',
    outputs: ['breakpoints.css'],
  },
  {
    number: '13',
    title: 'Motion & Micro-interactions',
    icon: 'motion',
    action: 'Apply one animation language — timing, easing, sequencing — across the whole system.',
    outputs: ['motion.css'],
  },
  {
    number: '14',
    title: 'Handoff & Developer Docs',
    icon: 'handoff',
    action: 'Generate the whole handoff package straight from the repo files.',
    outputs: ['README.md', '/handoff'],
  },
  {
    number: '15',
    title: 'Deploy to Netlify',
    icon: 'arrow-up',
    action: 'Push to the repo. Netlify builds and deploys the site.',
    outputs: ['/dist'],
  },
  {
    number: '16',
    title: 'Usability Testing',
    icon: 'eye',
    action:
      'Run corridor and A/B tests, then turn findings into the next hypotheses. The loop restarts at step 10.',
    outputs: ['findings.md'],
  },
];
