import type { IconName } from '@shared/ui';

/**
 * Nav renamed Projects · Process · About per copy-003. "Projects" points at
 * Home (the projects grid) since there's no separate /projects route.
 *
 * CV is NOT a nav item any more (feat-101). It joined as a fourth one in
 * feat-082, went desktop-invisible in feat-100 when the header button
 * arrived, and is now a `button-text` in BOTH views — the header at >=1024px
 * and the mobile overlay below it. That removed the last reason for the
 * `overlayOnly` flag this file briefly carried, so the flag is gone too: with
 * one component serving both, there is no list to be absent from.
 *
 * The canvas agrees and always did — `navigation-mobile/overlay` (2240:2) has
 * only ever had three nav items. The fourth existed in code alone.
 */
export interface NavItemDef {
  label: string;
  href: string;
  /** Opens in a new tab. Set for anything that is not an in-site route. */
  external?: boolean;
  /** Trailing glyph, 16px. Nothing uses one now that CV is a button. */
  icon?: IconName;
}

export const NAV_ITEMS: NavItemDef[] = [
  { label: 'Projects', href: '/' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
];
