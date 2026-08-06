export type ProjectAccess = 'public' | 'nda';

export interface Project {
  slug: string;
  name: string;
  /** Undefined where Max hasn't confirmed it yet — see copy-deck.md. */
  category?: string;
  /** Undefined where Max hasn't confirmed it yet — see copy-deck.md. */
  tags?: string[];
  access: ProjectAccess;
  thumbnail: string;
}

/** Project-detail-page content types — shared between entities/project's
 * per-project data files and the widgets that render them. Live here (not
 * in the widgets) so entities never imports upward from widgets, per FSD's
 * layer rule. */

/** A content slot that can hold either a still or a video. Used by the page
 * hero (feat-031) and by each process step (feat-026). Video slots name the
 * .webm — entities/media derives the .mp4 fallback by swapping the
 * extension, so both must ship under the same basename. */
export type ProjectMedia =
  | { type: 'image'; image: string; imageAlt: string }
  | { type: 'video'; src: string; poster?: string; alt: string };

/** Alias — process-accordion re-exports this name, and the shape is
 * identical now that the hero shares the same union. */
export type ProcessStepMedia = ProjectMedia;

/** One media+paragraph block inside a ContentSection (Challenge's single
 * block, Deliverables' two). Same image|video union as the hero and the
 * process steps — Deliverables' blocks are both videos as of feat-032. */
export interface ContentBlock {
  media: ProjectMedia;
  text: string;
}

export interface ProcessStep {
  /** Figma went back to a plain "01"–"04" number in the 80x80 badge shell,
   * reverting the per-step icon feat-028 synced (node 2124:3405). */
  number: string;
  title: string;
  /** Optional — Figma dropped the media from steps 03 and 04, which now
   * render as title + paragraph only. */
  media?: ProcessStepMedia;
  body: string;
}

/** One row of a project's detail-page gallery — the two layout shapes that
 * exist on the Figma canvas so far: a full-width single image, or a tall
 * image beside N stacked images. Gallery images are decorative on canvas
 * (no per-image caption/alt authored), so consumers render `alt=""`. */
export type GalleryRow =
  | { type: 'full'; image: string }
  | { type: 'split'; tall: string; stack: string[] };

/** A clickable sub-brand card in the overview (defenceSystems's subBrandOne.example /
 * subBrandTwo.example pair, feat-033). The card face's background is a CSS
 * value, not an exported image — Figma paints per-brand gradients/solids
 * on the card itself and the divider/label/arrow sit directly on it, so
 * only the logo lockup ships as an (transparent) image. */
export interface LinkCard {
  logo: string;
  logoAlt: string;
  /** Rendered logo width in px (the PNGs are @2x exports). */
  logoWidth: number;
  /** CSS background for the whole card face. */
  background: string;
  label: string;
  href: string;
}

/** Heading + big statement + optional smaller paragraph, no media — the
 * OverviewSection shape. defenceSystems's Challenge uses this; CONNECTIS's Challenge
 * is a media block (BlocksSection) instead. */
export interface StatementSection {
  heading: string;
  text: string;
  description?: string;
}

/** Heading + one or more stacked media+paragraph blocks — ContentSection's
 * input shape. */
export interface BlocksSection {
  heading: string;
  blocks: ContentBlock[];
}

/** The Build section: media+text blocks, optional stats row (rendered after
 * the first block's text), optional GitHub button (after the last block's
 * text). Structurally StatData, but not imported from entities/stat —
 * entities slices don't import each other. */
export interface BuildData {
  blocks: ContentBlock[];
  stats?: { value: string; unit?: string; label: string }[];
  githubUrl?: string;
}

/** Full case-study page content. Only hero + overview are universal;
 * every other section renders when present — defenceSystems has no accordion, no
 * video interstitial, and no gallery, while CONNECTIS has them all.
 * `process` as an array = accordion steps; as a BlocksSection = a single
 * media+paragraph section (defenceSystems). */
export interface ProjectContent {
  slug: string;
  name: string;
  hero: ProjectMedia;
  overview: {
    heading: string;
    text: string;
    description?: string;
    linkCards?: LinkCard[];
    tags?: string[];
  };
  challenge?: BlocksSection | StatementSection;
  process?: ProcessStep[] | BlocksSection;
  deliverables?: BlocksSection;
  build?: BuildData;
  video?: { src: string; poster: string; alt: string };
  gallery?: GalleryRow[];
  retrospective?: {
    heading: string;
    text: string;
    /** Optional — defenceSystems's closing section has no Behance link. */
    behanceUrl?: string;
  };
}
