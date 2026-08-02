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
