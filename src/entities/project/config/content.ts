import type { ProjectContent } from '../model/types';
import { artAnnanolli } from './art-annanolli';
import { arvus } from './arvus';
import { connectis } from './connectis';
import { medicalSoftware } from './medicalSoftware';
import { enterpriseIt } from './enterpriseIt';
import { defenceSystems } from './defenceSystems';

/**
 * Slug -> full case-study content, for projects that have one written.
 * Most projects only have grid-card data (config/projects.ts) so far —
 * [slug].astro falls back to the No Content state for any slug missing
 * here. Typed against ProjectContent (not `typeof connectis`) since
 * feat-033: pages differ structurally, and every optional section renders
 * only when present.
 */
export const PROJECT_CONTENT: Record<string, ProjectContent> = {
  'art-annanolli': artAnnanolli,
  arvus,
  connectis,
  medicalSoftware,
  enterpriseIt,
  defenceSystems,
};
