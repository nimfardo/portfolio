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
