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
 * per-project data files and widgets/process-accordion's renderer. Live
 * here (not in the widget) so entities never imports upward from widgets,
 * per FSD's layer rule. */
export type ProcessStepMedia =
  | { type: 'image'; image: string; imageAlt: string }
  | { type: 'video'; src: string; poster?: string; alt: string };

export interface ProcessStep {
  number: string;
  title: string;
  media: ProcessStepMedia;
  body: string;
}

/** One row of a project's detail-page gallery — the two layout shapes that
 * exist on the Figma canvas so far: a full-width single image, or a tall
 * image beside N stacked images. Gallery images are decorative on canvas
 * (no per-image caption/alt authored), so consumers render `alt=""`. */
export type GalleryRow =
  | { type: 'full'; image: string }
  | { type: 'split'; tall: string; stack: string[] };
