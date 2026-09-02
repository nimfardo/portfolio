// Build half of the NDA gate (bug-073). Runs in Node inside
// PasswordGate.astro's frontmatter, so `node:crypto` and the plaintext
// password never reach the client bundle — the browser only ever sees the
// ciphertext this returns.
//
// Imports the shared parameters from the deep module path rather than the
// `@shared/lib` barrel on purpose: the barrel re-exports browser-only
// modules that touch `window` at import time, and pulling those into a
// Node build step would blow up.
import { createCipheriv, pbkdf2Sync, randomBytes } from 'node:crypto';

import {
  NDA_IV_BYTES,
  NDA_KDF_ITERATIONS,
  NDA_KEY_BYTES,
  NDA_SALT_BYTES,
  type NdaPayload,
} from '@shared/lib/password-gate';

// ONE salt for the whole build, not one per page — this is deliberate and
// load-bearing, not a mistake.
//
// A single password guards every gated page, so per-page salts would buy no
// security whatsoever; what they would cost is the session resume. Each
// page carries its own ciphertext, so the browser needs a key that fits all
// of them: derive once on unlock, decrypt the next gated page without
// re-prompting. Per-page salts would mean a different key per page and a
// password prompt on every single one.
//
// The IV below is still fresh per page, which is the part that actually
// matters — reusing an IV under one AES-GCM key is the catastrophic case,
// and that is exactly what this avoids.
//
// Module-level, so it is computed once when Astro first loads this module
// and shared by every page rendered in that build.
const BUILD_SALT = randomBytes(NDA_SALT_BYTES);

/**
 * Seals rendered HTML into an AES-256-GCM payload keyed by `password`.
 * The output is base64 throughout so it survives transport in an HTML
 * attribute untouched.
 */
export function encryptGatedHtml(html: string, password: string): NdaPayload {
  const iv = randomBytes(NDA_IV_BYTES);
  const key = pbkdf2Sync(password, BUILD_SALT, NDA_KDF_ITERATIONS, NDA_KEY_BYTES, 'sha256');

  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const body = Buffer.concat([cipher.update(html, 'utf8'), cipher.final()]);

  // WebCrypto's `decrypt()` expects the GCM authentication tag appended to
  // the ciphertext; Node hands it back separately via `getAuthTag()`.
  // Concatenating here is what makes the two halves interoperate at all —
  // without it the browser side fails every decrypt with no useful error.
  const sealed = Buffer.concat([body, cipher.getAuthTag()]);

  return {
    salt: BUILD_SALT.toString('base64'),
    iv: iv.toString('base64'),
    data: sealed.toString('base64'),
  };
}
