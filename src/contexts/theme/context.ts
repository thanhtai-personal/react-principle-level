import { ThemeProviderState } from '@/types/ThemeState';
import { createContext } from 'react';

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
