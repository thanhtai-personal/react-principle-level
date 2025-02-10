import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useTheme } from './useTheme';
import { ThemeProviderContext } from '@/contexts/theme/context';
import { ReactNode } from 'react';
import { THEME } from '@/types/Theme';
import { useSignal } from '@preact/signals-react';

describe('useTheme', () => {
  // test("should throw an error if used outside ThemeProvider", () => {
  //   const { result } = renderHook(() => useTheme()) as any;
  //   console.log("result", result)
  //   expect(result.error).toBeInstanceOf(Error);
  //   expect(result.error?.message).toBe("useTheme must be used within a ThemeProvider");
  // });

  test('should return context value when used inside ThemeProvider', () => {
    const Wrapper = ({ children }: { children: ReactNode }) => {
      const theme = useSignal(THEME.dark);
      return (
        <ThemeProviderContext.Provider value={{ theme }}>
          {children}
        </ThemeProviderContext.Provider>
      );
    };

    const { result } = renderHook(() => useTheme(), { wrapper: Wrapper });

    expect(result.current.theme.value).toBe(THEME.dark);
  });
});
