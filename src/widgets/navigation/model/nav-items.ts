// Nav renamed Projects · Process · About per copy-003. "Projects" points at
// Home (the projects grid) since there's no separate /projects route.
export const NAV_ITEMS = [
  { label: 'Projects', href: '/' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
] as const;
