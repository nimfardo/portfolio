import type { IconName } from '@shared/ui';

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

export interface ProcessStep {
  /** Figma dropped the plain step number in favor of a per-step icon in
   * the same 80x80 badge shell (comp update synced from node 2304:1490). */
  icon: IconName;
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
