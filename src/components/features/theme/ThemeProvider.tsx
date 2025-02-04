import { ThemeProviderContext } from '@/contexts/theme/context';
import { Theme } from '@/types/Theme';
import { useSignal, useSignalEffect } from '@preact/signals-react';
import { ReactNode } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const theme = useSignal<Theme>(
    (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useSignalEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme.value === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme.value);
  });

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{
        theme: theme.value,
        setTheme: (themeValue: Theme) => {
          localStorage.setItem(storageKey, themeValue);
          theme.value = themeValue;
        },
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}
