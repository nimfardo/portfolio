import type { IconName } from '@shared/ui';

/**
 * One card in /about's link grid: an icon over a token background, with a
 * label + trailing icon footer.
 *
 * `accent` is the primary action (Download CV) and is the only one that gets
 * the amber face; `muted` is every outbound profile link. The variant drives
 * the background AND the ink, because the amber face needs on-accent ink while
 * the muted face needs emphasis ink — see ProfileLinks.astro.
 */
export interface ProfileLink {
  label: string;
  icon: IconName;
  href: string;
  variant?: 'accent' | 'muted';
  /** Serve the target as a download instead of navigating to it (the CV). */
  download?: boolean;
}
