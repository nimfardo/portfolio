// Self-hosts the dotLottie WASM runtime instead of loading it from a CDN
// (same reasoning as self-hosting Manrope in feat-004). Re-run on every
// npm install so it stays in sync with the pinned @lottiefiles/dotlottie-web
// version.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const src = 'node_modules/@lottiefiles/dotlottie-web/dist/dotlottie-player.wasm';
const dest = 'public/wasm/dotlottie-player.wasm';

mkdirSync(dirname(dest), { recursive: true });
copyFileSync(src, dest);
console.log(`Copied dotlottie WASM runtime to ${dest}`);
