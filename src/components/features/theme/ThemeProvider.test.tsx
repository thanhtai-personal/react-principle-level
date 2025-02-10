import { render, screen } from '@testing-library/react';
import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import { ThemeProvider } from './ThemeProvider';
import { ThemeProviderContext } from '@/contexts/theme/context';
import { THEME, Theme } from '@/types/Theme';

// Mock localStorage
const mockLocalStorage = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = value;
    }),
    clear: () => {
      store = {};
    },
  };
})();

describe('ThemeProvider Component', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true,
    });

    vi.spyOn(window, 'matchMedia').mockImplementation(
      (query) =>
        ({
          matches: query === '(prefers-color-scheme: dark)',
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        }) as any
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    mockLocalStorage.clear();
  });

  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Test Child</div>
      </ThemeProvider>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('applies system theme when no theme is stored', () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    render(<ThemeProvider children={undefined} />);

    const appliedTheme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';

    expect(appliedTheme).toBe(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    );
  });

  it('applies the stored theme from localStorage', () => {
    mockLocalStorage.getItem.mockReturnValue(THEME.dark);
    render(<ThemeProvider children={undefined} />);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('provides theme value via context', () => {
    let receivedTheme: Theme | null = null;

    render(
      <ThemeProvider>
        <ThemeProviderContext.Consumer>
          {({ theme }) => {
            receivedTheme = theme.value;
            return null;
          }}
        </ThemeProviderContext.Consumer>
      </ThemeProvider>
    );

    expect(receivedTheme).toBe(THEME.system);
  });
});
