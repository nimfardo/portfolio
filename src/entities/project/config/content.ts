import { connectis } from './connectis';

/**
 * Slug -> full case-study content, for projects that have one written.
 * Most projects only have grid-card data (config/projects.ts) so far —
 * [slug].astro falls back to the No Content state for any slug missing
 * here.
 */
export const PROJECT_CONTENT: Record<string, typeof connectis> = {
  connectis,
};
