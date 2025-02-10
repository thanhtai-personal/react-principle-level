import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AppStore } from './store';
import { ThemeProvider } from '@/components/features/theme/ThemeProvider';
import { Layout } from '@/components/features/layout';
import { THEME } from './types/Theme';

vi.mock('./AppRoutes', () => ({
  default: () => <div data-testid="app-routes">App Routes Loaded</div>,
}));

vi.mock('@/components/features/layout', () => ({
  Layout: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="layout">{children}</div>
  ),
}));

describe('Application Root Rendering', () => {
  it('renders the application correctly with all providers', () => {
    render(
      <AppStore.MobxProvider>
        <ThemeProvider defaultTheme={THEME.dark} storageKey="vite-ui-theme">
          <Layout>
            <MemoryRouter>
              <AppRoutes />
            </MemoryRouter>
          </Layout>
        </ThemeProvider>
      </AppStore.MobxProvider>
    );

    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByTestId('app-routes')).toBeInTheDocument();
  });
});
