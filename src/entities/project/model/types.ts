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
export interface ProcessStep {
  number: string;
  title: string;
  image: string;
  imageAlt: string;
  body: string;
}
