// Parses the real `tokens.css` at build time — nothing on `/system` is
// hand-typed. This is why ref-006 moved the file to `shared/config`: a
// widget importing `?raw` from `app` would violate FSD's layer direction.
import tokensRaw from '@shared/config/tokens.css?raw';

export type TokenCategory = 'Primitive' | 'Semantic' | 'Spacing' | 'Radius' | 'Typography' | 'Motion';

export interface TokenEntry {
  name: string;
  value: string;
  category: TokenCategory;
}

function categorize(name: string): TokenCategory {
  if (name.startsWith('--color-obsidian-amber-') || name === '--color-white' || name === '--color-black') {
    return 'Primitive';
  }
  if (name.startsWith('--color-')) return 'Semantic';
  if (name.startsWith('--spacing-')) return 'Spacing';
  if (name.startsWith('--radius-')) return 'Radius';
  if (name.startsWith('--font-')) return 'Typography';
  return 'Motion'; // --ease-* / --duration-*, the only names left in the file
}

/** Extracts the body of the first `selector { ... }` rule, brace-depth aware
 * so nested values (e.g. a `cubic-bezier(...)` with commas, not braces —
 * still fine, but written brace-aware in case a future token value ever
 * nests braces) don't truncate the block early. */
function extractBlock(source: string, selector: string): string {
  const start = source.indexOf(selector);
  if (start === -1) throw new Error(`tokens.css: "${selector}" block not found`);
  const braceStart = source.indexOf('{', start);
  let depth = 0;
  let end = braceStart;
  for (; end < source.length; end++) {
    if (source[end] === '{') depth++;
    if (source[end] === '}') {
      depth--;
      if (depth === 0) break;
    }
  }
  return source.slice(braceStart + 1, end);
}

function parseDeclarations(block: string): TokenEntry[] {
  const entries: TokenEntry[] = [];
  const re = /--([\w-]+):\s*([^;]+);/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(block))) {
    const name = `--${match[1]}`;
    entries.push({ name, value: match[2].trim(), category: categorize(name) });
  }
  return entries;
}

const rootBlock = extractBlock(tokensRaw, ':root');
const lightBlock = extractBlock(tokensRaw, "[data-theme='light']");

/** Every token as written under `:root` — the dark/default theme. */
export const DARK_TOKENS: TokenEntry[] = parseDeclarations(rootBlock);

/** The subset of tokens `[data-theme='light']` overrides, by name. */
export const LIGHT_OVERRIDES: Map<string, string> = new Map(
  parseDeclarations(lightBlock).map((t) => [t.name, t.value]),
);

export function tokensByCategory(category: TokenCategory): TokenEntry[] {
  return DARK_TOKENS.filter((t) => t.category === category);
}
