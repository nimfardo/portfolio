// Single account this site mirrors — see api/unsplash.ts. Not a secret
// (unlike PUBLIC_UNSPLASH_ACCESS_KEY), just the profile whose /photos
// endpoint widgets/photo-wall fetches.
export const UNSPLASH_USERNAME = 'nimfardo';

// Appended to every link back to unsplash.com, per the Unsplash API
// Guidelines' attribution requirement (utm_source + utm_medium=referral).
export const UNSPLASH_UTM_PARAMS = 'utm_source=max-shturma-portfolio&utm_medium=referral';
