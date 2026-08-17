/**
 * Max's industry experience, in years, from his own figures (2026-08-17).
 *
 * He supplied eight domains; these are folded to FIVE on semantics, not into an
 * "Other" bucket, so nothing is hidden:
 *   - "Security & defence"       = enterprise security 3 + military 2
 *   - "Automotive & industrial"  = automotive/fleet 2 + industrial 0.5
 *
 * FIVE is a measured ceiling, not a taste call. The palette is single-hue
 * (obsidian-amber), so a pie's categorical colour job is unsatisfiable — see
 * IndustryDonut.astro for the two contrast/ΔE numbers that cap it.
 *
 * `years` sums to 16.5 while the centre reads 9. That is deliberate: 9 is the
 * length of his career and the domains overlapped. The ring encodes share of
 * time across domains, and each arc states its own years.
 */
export interface Industry {
  label: string;
  years: number;
}

export const INDUSTRIES: Industry[] = [
  { label: 'E-commerce', years: 5 },
  { label: 'Security & defence', years: 5 },
  { label: 'Automotive & industrial', years: 2.5 },
  { label: 'E-learning & MedEd', years: 2 },
  { label: 'Creative & social video', years: 2 },
];

/** Career length, in years — not the sum of `years` above. See the note. */
export const CAREER_YEARS = 9;
