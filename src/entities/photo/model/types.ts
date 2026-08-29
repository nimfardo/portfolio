/** One Unsplash photo, narrowed to what widgets/photo-wall renders — the
 * grid tile image, its intrinsic size (for the tall/stack row math), and
 * the attribution links the Unsplash API Guidelines require: a link to the
 * photographer's profile and a link to the photo's own Unsplash page. */
export interface Photo {
  id: string;
  width: number;
  height: number;
  alt: string;
  url: string;
  photoPageUrl: string;
  photographerName: string;
  photographerUrl: string;
}
