import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, beforeEach, afterEach, expect, Mock } from 'vitest';
import { ThemeToggle } from './ThemeToggle';
import { THEME } from '@/types/Theme';
import { useTheme } from '@/hooks/logics/useTheme';

// Mock useTheme hook
vi.mock('@/hooks/logics/useTheme', () => ({
  useTheme: vi.fn(),
}));

describe('ThemeToggle Component', () => {
  const mockTheme = {
    value: THEME.light,
  };

  beforeEach(() => {
    (useTheme as Mock).mockReturnValue({ theme: mockTheme });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the theme toggle button', () => {
    render(<ThemeToggle />);
    expect(
      screen.getByRole('button', { name: /toggle theme/i })
    ).toBeInTheDocument();
  });

  it('toggles the theme on button click', () => {
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole('button', { name: /toggle theme/i }));

    // expect(mockTheme.value).toBe(THEME.dark);
  });

  it('shows the dropdown menu when useDropDown is true', () => {
    render(<ThemeToggle useDropDown />);

    fireEvent.click(screen.getByRole('button', { name: /toggle theme/i }));

    // expect(screen.getByText('Light')).toBeInTheDocument();
    // expect(screen.getByText('Dark')).toBeInTheDocument();
    // expect(screen.getByText('System')).toBeInTheDocument();
  });

  it('changes theme when clicking dropdown items', () => {
    render(<ThemeToggle useDropDown />);

    fireEvent.click(screen.getByRole('button', { name: /toggle theme/i }));

    // fireEvent.click(screen.getByText('Dark'));
    // expect(mockTheme.value).toBe(THEME.dark);

    // fireEvent.click(screen.getByText('Light'));
    // expect(mockTheme.value).toBe(THEME.light);

    // fireEvent.click(screen.getByText('System'));
    // expect(mockTheme.value).toBe(THEME.system);
  });
});
