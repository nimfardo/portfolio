import { prefersReducedMotion } from './reduced-motion';

const DURATION_MS = 900;

/**
 * Rolls any `[data-count-up]` element from zero to the number it already
 * contains, once, the first time it scrolls into view (awwwards idea 10,
 * feat-086). Same shape as `initScrollReveal`: one observer, unobserve on
 * fire, reduced-motion short-circuit, safe to call on every
 * `astro:page-load`.
 *
 * The element's server-rendered text IS the target — nothing is passed in a
 * prop — so no-JS readers, crawlers and reduced-motion all see the real
 * figure, and the number can only ever be wrong in one place (the content
 * file it came from). Only the first run of digits animates; anything around
 * it survives, which is what keeps `10+` reading as `10+` and not `10`.
 *
 * Callers reserve the final width themselves (`min-width` in `ch` plus
 * `tabular-nums` at the call site), because the element grows from one digit
 * to three as it counts and a flex row would otherwise shuffle under it for
 * 900ms.
 */
export function initCountUp(): void {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll<HTMLElement>('[data-count-up]:not([data-counted])');
  if (elements.length === 0) return;

  if (prefersReducedMotion()) {
    elements.forEach(markCounted);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        roll(entry.target as HTMLElement);
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
  );

  elements.forEach((el) => {
    const final = el.textContent ?? '';
    if (!/\d/.test(final)) {
      // A Stat can carry a non-numeric value; leave it exactly as authored.
      markCounted(el);
      return;
    }
    el.dataset.countFinal = final;
    el.textContent = final.replace(/\d+/, '0');
    observer.observe(el);
  });
}

function roll(el: HTMLElement): void {
  const final = el.dataset.countFinal ?? el.textContent ?? '';
  const target = Number(final.match(/\d+/)?.[0] ?? 0);
  const started = performance.now();

  const tick = (now: number) => {
    const t = Math.min(1, (now - started) / DURATION_MS);
    if (t < 1) {
      // ease-out cubic: most of the distance early, then a slow settle onto
      // the real figure rather than a linear tick that just stops.
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = final.replace(/\d+/, String(Math.round(target * eased)));
      requestAnimationFrame(tick);
      return;
    }
    // Write the authored string back verbatim on the last frame — the
    // rendered number must never be an artefact of the rounding above.
    el.textContent = final;
    markCounted(el);
  };

  requestAnimationFrame(tick);
}

function markCounted(el: HTMLElement): void {
  el.dataset.counted = '';
  delete el.dataset.countFinal;
}
