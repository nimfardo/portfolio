// Client-side-only gate for NDA project pages — no backend on this static
// site (feat-003 explicitly dropped the Netlify adapter), so this is
// obscurity, not real security: the hash ships in the bundle and anyone
// could brute-force or read it in devtools. Good enough for "don't stumble
// onto client NDA work," not for anything actually sensitive. One shared
// password for every NDA project, not per-project.
const SESSION_KEY = 'nda-unlocked';

// Lockout state lives in localStorage, not sessionStorage — a 2h lockout
// that resets the moment the tab closes wouldn't do anything. Same ceiling
// as the gate itself: this deters casual guessing, it doesn't stop anyone
// who clears site data or opens an incognito window.
const ATTEMPTS_KEY = 'nda-attempts';
const LOCKED_UNTIL_KEY = 'nda-locked-until';
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 2 * 60 * 60 * 1000;

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export function isNdaUnlocked(): boolean {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(SESSION_KEY) === '1';
}

// Ms remaining in an active lockout, or 0 if none — clearing a stale/expired
// lockout (and its attempt counter) as a side effect of the check.
export function getLockoutRemainingMs(): number {
  if (typeof window === 'undefined') return 0;
  const until = Number(localStorage.getItem(LOCKED_UNTIL_KEY));
  if (!until) return 0;
  const remaining = until - Date.now();
  if (remaining <= 0) {
    localStorage.removeItem(LOCKED_UNTIL_KEY);
    localStorage.removeItem(ATTEMPTS_KEY);
    return 0;
  }
  return remaining;
}

export async function tryUnlockNda(input: string): Promise<boolean> {
  if (getLockoutRemainingMs() > 0) return false;
  const expected = import.meta.env.PUBLIC_NDA_PASSWORD_HASH;
  if (!expected) return false;
  const correct = (await sha256Hex(input)) === expected;
  if (correct) {
    sessionStorage.setItem(SESSION_KEY, '1');
    localStorage.removeItem(ATTEMPTS_KEY);
    localStorage.removeItem(LOCKED_UNTIL_KEY);
  } else {
    const attempts = Number(localStorage.getItem(ATTEMPTS_KEY)) + 1;
    if (attempts >= MAX_ATTEMPTS) {
      localStorage.setItem(LOCKED_UNTIL_KEY, String(Date.now() + LOCKOUT_MS));
      localStorage.removeItem(ATTEMPTS_KEY);
    } else {
      localStorage.setItem(ATTEMPTS_KEY, String(attempts));
    }
  }
  return correct;
}
