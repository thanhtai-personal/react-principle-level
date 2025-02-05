import { Signal } from '@preact/signals-react';
import { Theme } from './Theme';

export type ThemeProviderState = {
  theme: Signal<Theme>;
};
