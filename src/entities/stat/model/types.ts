export interface Stat {
  value: string;
  /** Rendered smaller, inline after value — e.g. "KB" in "76 KB". */
  unit?: string;
  label: string;
}
