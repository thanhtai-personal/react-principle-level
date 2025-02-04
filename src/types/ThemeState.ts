import { Theme } from './Theme';

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
