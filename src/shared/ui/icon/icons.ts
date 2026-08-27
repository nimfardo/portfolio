import iconArrowRight from './svg/arrow-right.svg?raw';
import iconArrowLeft from './svg/arrow-left.svg?raw';
import iconArrowUp from './svg/arrow-up.svg?raw';
import iconBehance from './svg/behance.svg?raw';
import iconClose from './svg/close.svg?raw';
import iconDrop from './svg/drop.svg?raw';
import iconEye from './svg/eye.svg?raw';
import iconEyeOff from './svg/eye-off.svg?raw';
import iconLeaf from './svg/leaf.svg?raw';
import iconLinkedin from './svg/linkedin.svg?raw';
import iconLocker from './svg/locker.svg?raw';
import iconMenu from './svg/menu.svg?raw';
import iconMinus from './svg/minus.svg?raw';
import iconPlus from './svg/plus.svg?raw';
import iconScroll from './svg/scroll.svg?raw';
import iconSmile from './svg/smile.svg?raw';
import iconTree from './svg/tree.svg?raw';
import iconWaves from './svg/waves.svg?raw';
import iconSearch from './svg/search.svg?raw';
import iconPersonas from './svg/personas.svg?raw';
import iconSitemap from './svg/sitemap.svg?raw';
import iconWireframe from './svg/wireframe.svg?raw';
import iconSpeech from './svg/speech.svg?raw';
import iconPalette from './svg/palette.svg?raw';
import iconLayers from './svg/layers.svg?raw';
import iconTokens from './svg/tokens.svg?raw';
import iconSystem from './svg/system.svg?raw';
import iconFrame from './svg/frame.svg?raw';
import iconTerminal from './svg/terminal.svg?raw';
import iconResponsive from './svg/responsive.svg?raw';
import iconMotion from './svg/motion.svg?raw';
import iconHandoff from './svg/handoff.svg?raw';
import iconGithub from './svg/github.svg?raw';
import iconCv from './svg/cv.svg?raw';
import iconDownload from './svg/download.svg?raw';
import iconMail from './svg/mail.svg?raw';
import iconDribbble from './svg/dribbble.svg?raw';
import iconCheck from './svg/check.svg?raw';
import iconList from './svg/list.svg?raw';
import iconThumb from './svg/thumb.svg?raw';
import iconClaude from './svg/claude.svg?raw';
import iconKey from './svg/key.svg?raw';
import iconRetro from './svg/retro.svg?raw';
import iconUnsplash from './svg/unsplash.svg?raw';
import iconInstagram from './svg/instagram.svg?raw';

// Every file in ./svg is a full-frame `viewBox="0 0 28 28"` export of its Figma
// master, so rendering is one rule: fill the `size` box. There is no per-icon
// arithmetic here and there must not be again.
//
// What that replaced (comp-016, 2026-08-23): the set used to be a MIX of tight
// glyph-box exports (arrow-right was 14x14) and full-frame ones (menu was
// 28x28), on masters framed at either 28 or 32. So the old component rendered
// each file at its own intrinsic size and then CSS-scaled it by
// `size / nativeFrame`, with a FRAME_32_ICONS set naming the four exceptions.
// Both halves of that are gone because the Figma library was normalised first:
// all 45 `icon/*` masters are now 28x28 with SCALE/SCALE constraints, so a
// component export is uniform and an instance actually resizes.
//
// The normalisation deliberately did NOT rescale any glyph artwork — Max's
// constraint was a consistent library with no visual change to the site, and
// those two pull against each other (arrow-right's glyph is 14px inside its
// 28 frame, tokens' is 26px; equalising them IS the visual change). So optical
// size is still as-drawn, and the four masters that moved 32 -> 28 had their
// glyphs scaled by 28/32 in the same edit, which cancels exactly against this
// file no longer dividing by 32. github's glyph went 20 -> 17.5 and still
// renders 20px at size={32}.
//
// Verified rather than assumed: all 36 exports were measured against the files
// they replaced — identical path structure, identical ink size, and identical
// ink position to within 0.01px at size=28. Fourteen carry a sub-pixel
// `translate(...)` for that last part, because the old component CENTRED a
// tight export in its box while a full-frame export honours the glyph's own
// placement in the frame; arrow-left was the widest gap at 0.947px.
//
// Three files are NOT the current Figma export — close, menu and handoff.
// Their masters had already drifted from what shipped (menu's bars are 8px
// apart in Figma and 6px here; handoff has a page-corner fold in code that the
// master lacks). Taking Figma would have changed the site, so these keep the
// shipped artwork, re-framed onto the 28 viewBox. That drift is pre-existing
// and still unreconciled — see wiki/log.md.
//
// github was the fourth until bug-063. It shipped as the 23px drawing comp-014
// logged, against a 20px master, and in the nav's social row that read visibly
// larger than linkedin (14.3px wide) and behance (18px) at the same size={32}.
// Max picked the master, so the glyph is now scaled 17.5/23 and re-centred in
// the 28 viewBox — 20px at size={32}, the one drift of the four resolved.
// The path data is untouched; only the wrapping <g> transform changed.
//
// Nine more joined 2026-08-27 (comp-017, Max's own screenshot of the Figma
// icons frame, node 2048:442): dribbble, check, list, thumb, claude, key,
// retro, unsplash, instagram — exported the same way (master node, 28x28,
// #EFCBA6 swapped for currentColor), bringing code to parity with Figma's
// full 45-icon library rather than the 36 that had quietly accumulated.
export const icons = {
  'arrow-right': iconArrowRight,
  'arrow-left': iconArrowLeft,
  'arrow-up': iconArrowUp,
  behance: iconBehance,
  close: iconClose,
  drop: iconDrop,
  eye: iconEye,
  'eye-off': iconEyeOff,
  leaf: iconLeaf,
  linkedin: iconLinkedin,
  locker: iconLocker,
  menu: iconMenu,
  minus: iconMinus,
  plus: iconPlus,
  scroll: iconScroll,
  smile: iconSmile,
  tree: iconTree,
  waves: iconWaves,
  search: iconSearch,
  personas: iconPersonas,
  sitemap: iconSitemap,
  wireframe: iconWireframe,
  speech: iconSpeech,
  palette: iconPalette,
  layers: iconLayers,
  tokens: iconTokens,
  system: iconSystem,
  frame: iconFrame,
  terminal: iconTerminal,
  responsive: iconResponsive,
  motion: iconMotion,
  handoff: iconHandoff,
  github: iconGithub,
  cv: iconCv,
  download: iconDownload,
  mail: iconMail,
  dribbble: iconDribbble,
  check: iconCheck,
  list: iconList,
  thumb: iconThumb,
  claude: iconClaude,
  key: iconKey,
  retro: iconRetro,
  unsplash: iconUnsplash,
  instagram: iconInstagram,
} as const;

export type IconName = keyof typeof icons;

// One source of truth for "every icon that exists" — ComponentGallery's
// Atoms entry renders this list instead of a hand-typed one, so the gallery
// can't silently fall behind the Figma library the way it did before this
// (code had 36 of Figma's 45; the gap went unnoticed until Max compared the
// two side by side).
//
// Lives in this plain .ts module rather than Icon.astro's frontmatter on
// purpose: Astro compiles an unexported frontmatter `const` into the
// component's per-render function scope, but hoists an exported one to real
// module scope evaluated at import time — so `export const ICON_NAMES =
// Object.keys(icons)` inside Icon.astro compiled to a module-level statement
// referencing a function-scoped `icons`, which doesn't exist there
// ("ReferenceError: icons is not defined", confirmed in the built chunk
// before this file existed). A plain module has no such split.
export const ICON_NAMES = Object.keys(icons) as IconName[];
