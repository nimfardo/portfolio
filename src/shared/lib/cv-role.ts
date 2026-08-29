import { CV_DEFAULT_ROLE, CV_ROLE_HREFS, type CvRole } from '@shared/config';

// Same shape as Layout.astro's theme script: read a preference, persist it,
// and re-apply on every `astro:page-load` (real load + every ClientRouter
// swap) so it survives navigating to a page whose URL carries no `?for=`.
const STORAGE_KEY = 'cvRole';
const ROLE_PARAM = 'for';

// ButtonText doesn't spread arbitrary props onto its rendered <a>, and only
// two call sites exist, so this hooks their own existing classes rather than
// adding a new prop just for this. If either class is ever renamed, this
// selector goes stale silently — grep for it before renaming `__cv`.
const CV_LINK_SELECTOR = '.nav-mobile-overlay__cv, .page-header__cv';

function isCvRole(value: string | null): value is CvRole {
  return value !== null && value in CV_ROLE_HREFS;
}

function resolveRole(): CvRole {
  const fromUrl = new URLSearchParams(window.location.search).get(ROLE_PARAM);
  if (isCvRole(fromUrl)) {
    localStorage.setItem(STORAGE_KEY, fromUrl);
    return fromUrl;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  return isCvRole(stored) ? stored : CV_DEFAULT_ROLE;
}

export function initCvRole() {
  const href = CV_ROLE_HREFS[resolveRole()];
  document.querySelectorAll<HTMLAnchorElement>(CV_LINK_SELECTOR).forEach((link) => {
    link.href = href;
  });
}
