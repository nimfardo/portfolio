/**
 * Max's industry experience as PROJECT COUNTS, from his own figures
 * (2026-08-23, feat-078/079). This replaced a years-based model: the old one
 * summed to 16.5 across overlapping domains while the donut's centre read 9,
 * which needed a paragraph of explanation. Counts are non-overlapping — one
 * project lands in exactly one bucket — so the bar needs none.
 *
 * ORDER IS DESCENDING AND LOAD-BEARING (feat-079). The ramp is indexed by
 * position, not carried on the record, so the array order *is* the colour
 * order. Before feat-079 the sequence had colour and value disagreeing — the
 * ramp darkens down the array, so the 1-project column sat at a lighter step
 * than the two 2-project columns. If this order ever changes, re-check the
 * ramp AND the count-ink flip point in IndustriesBar.astro; reordering without
 * re-indexing both is the failure mode.
 *
 * Widths are NOT stored here and must not be. The three tail columns are
 * floored at a minimum-readable band and only the two wide ones divide the
 * remainder — that is a layout rule, and IndustriesBar.astro derives it from
 * `count` via the flex algorithm. See the width note there.
 *
 * ── Two open content items, both Max's call, neither blocking ──────────────
 *   * The counts sum to 20 against the 12 cards on Home. Some projects are
 *     unshipped or NDA'd out of the grid, but the two figures are visible on
 *     one site and a reader can subtract.
 *   * `10+` makes the first column a FLOOR, not a measurement, which means the
 *     bar's widest segment encodes "at least this much" while the other four
 *     encode exact values. `count` carries 10 so the proportion is defined;
 *     `display` is what renders.
 */
export interface Industry {
  label: string;
  /** Drives the segment's flex ratio. For a floored figure this is the floor. */
  count: number;
  /** Rendered figure. Omit when it is just `count`. */
  display?: string;
}

export const INDUSTRIES: Industry[] = [
  { label: 'Enterprise & security', count: 10, display: '10+' },
  { label: 'Consumer & brand', count: 5 },
  { label: 'Defence', count: 2 },
  { label: 'Medical', count: 2 },
  { label: 'E-learning', count: 1 },
];
