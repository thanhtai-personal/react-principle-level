export enum THEME {
  dark = 'dark',
  light = 'light',
  system = 'system',
}

export const themeValues = Object.values(THEME) as THEME[];

export type Theme = (typeof themeValues)[number];
