export type MediaType = 'lottie' | 'gif' | 'video';

export interface MediaAsset {
  type: MediaType;
  /**
   * For type "video": path/URL to the .webm file. The .mp4 fallback is
   * derived by swapping the extension — export both under the same
   * basename (see planning/specs/site-implementation.md, Assets).
   */
  src: string;
  poster?: string;
  alt: string;
}
