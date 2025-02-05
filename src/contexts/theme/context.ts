import { ThemeProviderState } from '@/types/ThemeState';
import { createContext } from 'react';

const initialState: ThemeProviderState = {
  theme: 'dark' as any,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
