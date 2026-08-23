import type { IconName } from '@shared/ui';

/**
 * Nav renamed Projects · Process · About per copy-003. "Projects" points at
 * Home (the projects grid) since there's no separate /projects route.
 *
 * CV joined as a fourth item in feat-082, from canvas node
 * I2793:3257;2801:3720 — a nav item with a 16px download icon beside it, not a
 * social icon in the row at the bottom. It is the one nav entry that leaves the
 * site, which is what `external` and `icon` are for: it opens the PDF in a new
 * tab rather than navigating the SPA to a file the ClientRouter cannot swap.
 */
export interface NavItemDef {
  label: string;
  href: string;
  /** Opens in a new tab. Set for anything that is not an in-site route. */
  external?: boolean;
  /** Trailing glyph, 16px. Only CV has one; the rest render label-only. */
  icon?: IconName;
}

export const NAV_ITEMS: NavItemDef[] = [
  { label: 'Projects', href: '/' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'CV', href: '/max-shturma-cv.pdf', external: true, icon: 'download' },
];
