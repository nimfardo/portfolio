/**
 * The CV lives in exactly one place because two now need it: the mobile nav
 * overlay (`widgets/navigation`) and the desktop header button
 * (`widgets/page-header`, feat-100). Widgets must not import each other under
 * FSD, so the shared value sits here rather than in either of them.
 *
 * `CV_HREF` is a real file in `public/`, not a route. Two consequences:
 *   * It opens in a NEW TAB. The ClientRouter cannot swap a PDF into the SPA,
 *     and Max's requirement is that the reader sees the CV first and saves it
 *     from the viewer if they want it.
 *   * It must NOT carry a `download` attribute. `download` skips the browser's
 *     PDF viewer and drops a file straight into Downloads, which is the exact
 *     behaviour that requirement rules out. The label is short ("CV"); the
 *     mechanism is open-then-save, and the two are allowed to differ.
 */
export const CV_HREF = '/max-shturma-cv.pdf';

/** Header button copy (feat-100, shortened feat-106). Rendered uppercase by Button's own styles. */
export const CV_LABEL = 'CV';

/**
 * Three CVs exist (feat-088, Figma page `CV` 2851:5541) — one per target role
 * — but the site ships one unlabeled CV button, not a visible picker (Max's
 * call: a picker broadcasts "applying to multiple role types" to whoever is
 * reading it, which undercuts a senior-role read in particular). Which file
 * the button points to is instead driven silently by `shared/lib/cv-role.ts`
 * off a `?for=` link param, so a recruiter link can carry the targeting
 * without the visitor ever seeing a choice. `CV_HREF` above stays the
 * server-rendered default (no-JS / no-param fallback) — unchanged on purpose,
 * so an existing recruiter link to the bare PDF keeps working.
 *
 * `design-systems-designer` and `senior-designer` ship as placeholder copies
 * of the same default PDF until Max exports the real ones from Figma frames
 * 2857:10/:14 and 2857:18/:22 (STATE.md, still owed as of 2026-08-23).
 */
export type CvRole = 'design-engineer' | 'design-systems-designer' | 'senior-designer';

export const CV_DEFAULT_ROLE: CvRole = 'design-engineer';

export const CV_ROLE_HREFS: Record<CvRole, string> = {
  'design-engineer': CV_HREF,
  'design-systems-designer': '/max-shturma-cv-design-systems-designer.pdf',
  'senior-designer': '/max-shturma-cv-senior-designer.pdf',
};
