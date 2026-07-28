// Client-side-only gate for NDA project pages — no backend on this static
// site (feat-003 explicitly dropped the Netlify adapter), so this is
// obscurity, not real security: the hash ships in the bundle and anyone
// could brute-force or read it in devtools. Good enough for "don't stumble
// onto client NDA work," not for anything actually sensitive. One shared
// password for every NDA project, not per-project.
const SESSION_KEY = 'nda-unlocked';

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

export async function tryUnlockNda(input: string): Promise<boolean> {
  const expected = import.meta.env.PUBLIC_NDA_PASSWORD_HASH;
  if (!expected) return false;
  const correct = (await sha256Hex(input)) === expected;
  if (correct) sessionStorage.setItem(SESSION_KEY, '1');
  return correct;
}
