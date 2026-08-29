import type { Photo } from '../model/types';
import { UNSPLASH_UTM_PARAMS } from '../config/unsplash';

// Raw shape of one element in GET /users/:username/photos — narrowed to the
// fields toPhoto() actually reads. See
// https://unsplash.com/documentation#user-photos
interface UnsplashApiPhoto {
  id: string;
  width: number;
  height: number;
  alt_description: string | null;
  urls: { small: string };
  links: { html: string };
  user: { name: string; links: { html: string } };
}

function withUtm(url: string): string {
  return `${url}${url.includes('?') ? '&' : '?'}${UNSPLASH_UTM_PARAMS}`;
}

function toPhoto(raw: UnsplashApiPhoto): Photo {
  return {
    id: raw.id,
    width: raw.width,
    height: raw.height,
    alt: raw.alt_description ?? 'Photo by Max Shturma',
    url: raw.urls.small,
    photoPageUrl: withUtm(raw.links.html),
    photographerName: raw.user.name,
    photographerUrl: withUtm(raw.user.links.html),
  };
}

const PER_PAGE = 30;
// Safety cap on pagination — real accounts won't get near 300 photos, this
// just stops a malformed x-total header from looping forever.
const MAX_PAGES = 10;

/**
 * Fetches every public photo for `username` from the Unsplash API,
 * client-side only (never call this at build/render time — see
 * shared/lib/password-gate.ts for why this site takes that approach: no
 * backend to hide the request behind, so it has to run in the visitor's
 * browser using the public PUBLIC_UNSPLASH_ACCESS_KEY). Paginates through
 * every page (Demo apps cap each request at 30 photos), so an account with
 * more than 30 photos costs more than one request against the shared
 * 50/hour Demo rate limit.
 */
export async function fetchUserPhotos(username: string): Promise<Photo[]> {
  const accessKey = import.meta.env.PUBLIC_UNSPLASH_ACCESS_KEY;
  if (!accessKey) throw new Error('PUBLIC_UNSPLASH_ACCESS_KEY is not set.');

  const headers = { Authorization: `Client-ID ${accessKey}` };
  const photos: Photo[] = [];
  let page = 1;
  // Assigned inside the loop before its first read (a do...while body
  // always runs once before the condition check), so no initializer here.
  let totalPages: number;

  do {
    const res = await fetch(
      `https://api.unsplash.com/users/${username}/photos?page=${page}&per_page=${PER_PAGE}&order_by=latest`,
      { headers },
    );
    if (!res.ok) throw new Error(`Unsplash request failed: ${res.status}`);

    const total = Number(res.headers.get('x-total') ?? '0');
    totalPages = total > 0 ? Math.min(Math.ceil(total / PER_PAGE), MAX_PAGES) : 1;

    const data = (await res.json()) as UnsplashApiPhoto[];
    photos.push(...data.map(toPhoto));
    page += 1;
  } while (page <= totalPages);

  return photos;
}
