import type { Project } from '../model/types';

/**
 * Grid order and thumbnails match the Home project-grid instance in Figma
 * (`project-grid`, node 2056:505 — mapped via each card's `media`
 * INSTANCE_SWAP -> the real `media/project-*` component name, since the card
 * instances themselves still hold Figma's placeholder text).
 * Name/category/tags/access for the resolved projects come from
 * reference/content/copy-deck.md's Project cards table.
 *
 * That parity claim was false for a while and this comment asserted it anyway:
 * Max moved socialVideo from 9 to 7 on canvas and the array kept the old position
 * until feat-074. `reference/architecture/sitemap.md` is what caught it — it
 * had recorded position 7 as correct and the mismatch as tracked work. If the
 * canvas order changes again, edit the array AND re-check that file; a comment
 * saying "matches Figma" is not evidence that it does.
 *
 * Re-synced 2026-08-29: Seismo dropped from the grid entirely (Max deleted
 * its card on canvas, no code-side content ever existed for it), MeTest and
 * Logofolio swapped, and Motion is new — a 13th card with grid-only data,
 * no `PROJECT_CONTENT` entry yet since its copy is still being written.
 * `reference/architecture/sitemap.md` still lists Seismo and is owed the
 * same re-check the comment above warns about.
 *
 * `category`/`tags` are omitted (not guessed) for medicalSoftware and the 5
 * name-TBD projects — copy-deck.md marks these explicitly TBD pending Max.
 * ProjectCard renders without that row when absent.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'medicalSoftware',
    name: 'medicalSoftware',
    access: 'nda',
    thumbnail: '/media/medicalSoftware/thumbnail.jpg',
  },
  {
    slug: 'connectis',
    name: 'CONNECTIS',
    category: 'Enterprise · Logistics',
    tags: ['ux', 'ui', 'design system', 'code'],
    access: 'public',
    thumbnail: '/media/connectis/thumbnail.jpg',
  },
  {
    slug: 'defenceSystems',
    name: 'defenceSystems',
    category: 'Military',
    tags: ['brand', 'ux', 'ui', 'motion'],
    access: 'nda',
    thumbnail: '/media/defenceSystems/thumbnail.jpg',
  },
  {
    slug: 'arvus',
    name: 'Arvus',
    category: 'Security · B2B',
    tags: ['ux', 'ui', 'brand', 'motion'],
    access: 'public',
    thumbnail: '/media/arvus/thumbnail.jpg',
  },
  {
    slug: 'enterpriseIt',
    name: 'enterpriseIt',
    category: 'Enterprise tools',
    tags: ['ux', 'ui', 'dashboards'],
    access: 'nda',
    thumbnail: '/media/enterpriseIt/thumbnail.jpg',
  },
  {
    slug: 'eLearning',
    name: 'eLearning',
    category: 'E-learning',
    tags: ['ux', 'ui', 'design system'],
    access: 'nda',
    thumbnail: '/media/eLearning/thumbnail.png',
  },
  {
    slug: 'socialVideo',
    name: 'socialVideo',
    category: 'Social video',
    tags: ['ux', 'ui', 'motion', 'design system'],
    access: 'nda',
    thumbnail: '/media/socialVideo/thumbnail.jpg',
  },
  {
    slug: 'art-annanolli',
    name: 'Art Annanolli',
    access: 'public',
    thumbnail: '/media/art-annanolli/thumbnail.jpg',
  },
  {
    slug: 'metest',
    name: 'MeTest',
    access: 'public',
    thumbnail: '/media/metest/thumbnail.jpg',
  },
  {
    slug: 'logofolio',
    name: 'Logofolio',
    access: 'public',
    thumbnail: '/media/logofolio/thumbnail.jpg',
  },
  // Case-study content landed 2026-08-29 (config/motion.ts). Card art is a
  // get_screenshot export of the composited Figma card (node 2006:224),
  // cropped to the standard 515x400. category/tags stay omitted here (same
  // as medicalSoftware) pending copy-deck.md's Project cards table.
  {
    slug: 'motion',
    name: 'Motion',
    access: 'public',
    thumbnail: '/media/motion/thumbnail.jpg',
  },
  // Not a case study — a live Unsplash-fed gallery, served by the static
  // pages/projects/gallery.astro route rather than PROJECT_CONTENT (see
  // that file's own comment). Card art is the Figma-designed
  // media/photo-gallery composite (node 3067:3889), exported once same as
  // every other thumbnail.
  {
    slug: 'gallery',
    name: 'Gallery',
    access: 'public',
    thumbnail: '/media/gallery/thumbnail.jpg',
  },
  {
    slug: 'khvyliasti',
    name: 'Khvyliasti',
    access: 'public',
    thumbnail: '/media/khvyliasti/thumbnail.jpg',
  },
];
