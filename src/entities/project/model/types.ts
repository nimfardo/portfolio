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
