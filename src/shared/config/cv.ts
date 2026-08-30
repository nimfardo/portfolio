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
 * Each role also ships a dark and a light PDF (rendered by
 * `scripts/cv-pdf/render.mjs` straight from the site's own tokens/template),
 * matching whichever theme the visitor is currently in — `cv-role.ts` reads
 * `document.documentElement.dataset.theme` the same way the theme toggle
 * itself does. `CV_HREF`'s file is the dark/design-engineer entry below.
 */
export type CvRole = 'design-engineer' | 'design-systems-designer' | 'senior-designer';
export type CvTheme = 'dark' | 'light';

export const CV_DEFAULT_ROLE: CvRole = 'design-engineer';

export const CV_ROLE_HREFS: Record<CvRole, Record<CvTheme, string>> = {
  'design-engineer': {
    dark: CV_HREF,
    light: '/max-shturma-cv-light.pdf',
  },
  'design-systems-designer': {
    dark: '/max-shturma-cv-design-systems-designer.pdf',
    light: '/max-shturma-cv-design-systems-designer-light.pdf',
  },
  'senior-designer': {
    dark: '/max-shturma-cv-senior-designer.pdf',
    light: '/max-shturma-cv-senior-designer-light.pdf',
  },
};
