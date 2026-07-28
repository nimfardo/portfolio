import { prefersReducedMotion } from './reduced-motion';

/**
 * Fades/rises in any `[data-reveal]` element once when it first enters the
 * viewport (adapted from wearemotto.com's line-reveal pattern — see
 * wiki/concepts/motto-motion-patterns.md). Reduced-motion skips straight to
 * the revealed state. Call once per page load; safe to call repeatedly
 * (already-revealed elements are unobserved).
 */
export function initScrollReveal(): void {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)');
  if (elements.length === 0) return;

  if (prefersReducedMotion()) {
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * `--reveal-delay` value for the Nth item in a staggered group (e.g. grid
 * columns, accordion steps) — cycles every `mod` items if given, so a
 * multi-row/column layout staggers each row/column the same way instead of
 * accumulating one long delay across the whole list.
 */
export function staggerDelay(index: number, stepMs: number, mod?: number): string {
  const i = mod ? index % mod : index;
  return `${i * stepMs}ms`;
}
