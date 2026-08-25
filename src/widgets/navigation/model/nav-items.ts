import type { IconName } from '@shared/ui';
import { CV_HREF } from '@shared/config';

/**
 * Nav renamed Projects · Process · About per copy-003. "Projects" points at
 * Home (the projects grid) since there's no separate /projects route.
 *
 * CV joined as a fourth item in feat-082, from canvas node
 * I2793:3257;2801:3720 — a nav item with a 16px download icon beside it, not a
 * social icon in the row at the bottom. It is the one nav entry that leaves the
 * site, which is what `external` and `icon` are for: it opens the PDF in a new
 * tab rather than navigating the SPA to a file the ClientRouter cannot swap.
 *
 * As of feat-100 CV is `overlayOnly`, and the reason is a trap worth stating:
 * this ONE array feeds BOTH the desktop sidebar and the mobile overlay. The
 * desktop route for CV is now the header button (canvas 2910:2049), so the
 * sidebar item is redundant there — but `PageHeader` is `display: none` below
 * 1024px, so simply deleting the item would leave phones with no CV at all.
 * Hence a flag the desktop list filters on, rather than a deletion.
 */
export interface NavItemDef {
  label: string;
  href: string;
  /** Opens in a new tab. Set for anything that is not an in-site route. */
  external?: boolean;
  /** Trailing glyph, 16px. Only CV has one; the rest render label-only. */
  icon?: IconName;
  /**
   * Render in the mobile overlay but NOT the desktop sidebar. Set only on CV,
   * which desktop reaches through the header button instead. Deleting the item
   * outright would strip it from mobile too, where the header never renders.
   */
  overlayOnly?: boolean;
}

export const NAV_ITEMS: NavItemDef[] = [
  { label: 'Projects', href: '/' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'CV', href: CV_HREF, external: true, icon: 'download', overlayOnly: true },
];
