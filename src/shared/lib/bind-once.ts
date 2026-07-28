/**
 * Binds `init` to every element matching `selector` that hasn't been bound
 * yet, marking it so a later call (e.g. a repeat `astro:page-load` firing
 * for a `transition:persist` node that survived a ClientRouter swap) skips
 * it instead of double-binding listeners.
 */
export function bindOncePersisted<T extends HTMLElement>(
  selector: string,
  init: (el: T) => void,
): void {
  document.querySelectorAll<T>(`${selector}:not([data-bound])`).forEach((el) => {
    el.dataset.bound = '1';
    init(el);
  });
}
