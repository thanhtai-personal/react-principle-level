import { THEME } from '@/types/Theme';
import { ThemeProviderState } from '@/types/ThemeState';
import { createContext } from 'react';

const initialState: ThemeProviderState = {
  theme: THEME.dark as any,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
