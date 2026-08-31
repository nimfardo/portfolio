import { prefersReducedMotion } from './reduced-motion';

/**
 * Wires up a group of native `<details>` elements matching `itemSelector` as
 * a single-open accordion with an animated height transition (opening one
 * closes whichever other one is open). Shared by ProcessAccordion (case-study
 * process steps: media + paragraph) and WorkflowAccordion (the 16-step
 * design workflow: icon + action + output pills) — the interaction is
 * identical between them, only the content inside each `<details>` differs.
 *
 * Each item's content pane is resolved structurally (`<details>`'s first
 * non-`<summary>` child), not by class name, so this stays reusable across
 * different content shapes without the caller passing extra selectors.
 *
 * Open/close is animated via WAAPI (the standard details/summary animation
 * recipe — toggling `open` natively gives no transition hook at all): the
 * `<details>` element's `height` is animated between its current and target
 * value, and `open` only flips once the animation settles. Not done via the
 * native `name` grouping attribute — setting `details.open = true` on the
 * newly-opened item makes the browser instantly force-close same-named
 * siblings itself, snapping the previous item shut before its own collapse
 * animation gets a chance to run.
 *
 * Call once per page load; safe to call repeatedly since it just re-wires
 * whatever currently matches `itemSelector`.
 */
export function initAccordionGroup(itemSelector: string): void {
  if (typeof window === 'undefined') return;
  if (prefersReducedMotion()) return;

  const root = getComputedStyle(document.documentElement);
  const duration = parseFloat(root.getPropertyValue('--duration-base')) * 1000;
  const easing = root.getPropertyValue('--ease-reveal').trim();

  let openItem: HTMLDetailsElement | null = null;
  const toggles = new Map<HTMLDetailsElement, (open: boolean) => void>();

  document.querySelectorAll<HTMLDetailsElement>(itemSelector).forEach((details) => {
    const summary = details.querySelector<HTMLElement>('summary');
    const content = details.querySelector<HTMLElement>(':scope > :not(summary)');
    if (!summary || !content) return;

    let animation: Animation | null = null;

    summary.addEventListener('click', (event) => {
      event.preventDefault();
      const opening = !details.open;
      if (opening && openItem && openItem !== details) {
        toggles.get(openItem)?.(false);
      }
      toggle(opening);
      openItem = opening ? details : null;
    });

    function finish(open: boolean) {
      details.open = open;
      animation = null;
      details.style.height = '';
      details.style.overflow = '';
    }

    // Opening and closing are the same animation with the direction
    // flipped: cancel whatever's in flight, animate `height` from the
    // current value to the target, settle `open` on finish. The only
    // asymmetry is startHeight when opening — `details.open = true` must
    // happen before reading `content.offsetHeight` for endHeight (that's
    // how the browser lays out the now-visible content), but startHeight
    // itself comes from `summary.offsetHeight` either way (the collapsed
    // height), which setting `open` doesn't affect.
    function toggle(open: boolean) {
      animation?.cancel();
      // Clip for the whole animated toggle, no matter who initiated it —
      // a item closed *programmatically* by the single-open rule needs this
      // too, or its content paints over the item below for the duration of
      // the close animation (bug-039, the "overlap flash"). finish() clears
      // it.
      details.style.overflow = 'hidden';
      // Drives the +/- icon swap, decoupled from `details.open` on purpose:
      // closing must keep `open=true` for the whole collapse (native
      // <details> hides content the instant `open` is removed, which would
      // break the height animation), so `details.open` only flips to false
      // in finish().
      details.classList.toggle('is-open', open);
      const startHeight = open ? `${summary!.offsetHeight}px` : `${details.offsetHeight}px`;
      if (open) details.open = true;
      const endHeight = open
        ? `${summary!.offsetHeight + content!.offsetHeight}px`
        : `${summary!.offsetHeight}px`;
      animation = details.animate({ height: [startHeight, endHeight] }, { duration, easing });
      animation.onfinish = () => finish(open);
    }

    toggles.set(details, toggle);
  });
}
