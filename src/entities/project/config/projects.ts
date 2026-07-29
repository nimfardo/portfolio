import type { Project } from '../model/types';

/**
 * Grid order and thumbnails match the Home project-grid instance in Figma
 * (mapped via each card's `media` INSTANCE_SWAP -> the real `media/project-*`
 * component name, since the card instances themselves still hold Figma's
 * placeholder text). Name/category/tags/access for the resolved projects
 * come from reference/content/copy-deck.md's Project cards table.
 *
 * `category`/`tags` are omitted (not guessed) for medicalSoftware and the 5
 * name-TBD projects — copy-deck.md marks these explicitly TBD pending Max.
 * ProjectCard renders without that row when absent.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'arvus',
    name: 'Arvus',
    category: 'Security · B2B',
    tags: ['ux', 'ui', 'brand', 'motion'],
    access: 'public',
    thumbnail: '/media/arvus/thumbnail.jpg',
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
    slug: 'connectis',
    name: 'CONNECTIS',
    category: 'Enterprise · Logistics',
    tags: ['ux', 'ui', 'design system', 'code'],
    access: 'public',
    thumbnail: '/media/connectis/thumbnail.jpg',
  },
  {
    slug: 'medicalSoftware',
    name: 'medicalSoftware',
    access: 'nda',
    thumbnail: '/media/medicalSoftware/thumbnail.jpg',
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
    slug: 'art-annanolli',
    name: 'Art Annanolli',
    access: 'public',
    thumbnail: '/media/art-annanolli/thumbnail.jpg',
  },
  {
    slug: 'logofolio',
    name: 'Logofolio',
    access: 'public',
    thumbnail: '/media/logofolio/thumbnail.jpg',
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
    slug: 'metest',
    name: 'MeTest',
    access: 'public',
    thumbnail: '/media/metest/thumbnail.jpg',
  },
  {
    slug: 'seismo',
    name: 'Seismo',
    access: 'public',
    thumbnail: '/media/seismo/thumbnail.png',
  },
  {
    slug: 'khvyliasti',
    name: 'Khvyliasti',
    access: 'public',
    thumbnail: '/media/khvyliasti/thumbnail.jpg',
  },
];
