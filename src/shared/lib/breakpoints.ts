// Matches the breakpoint set agreed in planning/specs/site-implementation.md.
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export function isViewportAtLeast(breakpoint: Breakpoint | number): boolean {
  if (typeof window === 'undefined') return true;
  const px = typeof breakpoint === 'number' ? breakpoint : BREAKPOINTS[breakpoint];
  return window.matchMedia(`(min-width: ${px}px)`).matches;
}
