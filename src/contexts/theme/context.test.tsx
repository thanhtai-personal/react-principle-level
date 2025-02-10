import { render, screen } from '@testing-library/react';
import { THEME } from '@/types/Theme';
import { useContext } from 'react';
import { describe, it, expect } from 'vitest';
import { ThemeProviderContext } from './context';

describe('ThemeProviderContext', () => {
  it('provides the default theme as dark', () => {
    // Test component to consume the context
    const TestComponent = () => {
      const context = useContext(ThemeProviderContext);
      return <div>{context.theme}</div>;
    };

    render(<TestComponent />);

    // Check if the default theme is THEME.dark
    expect(screen.getByText(THEME.dark)).toBeInTheDocument();
  });
});
