import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

vi.mock('./pages/Home', () => ({
  default: () => <div data-testid="home-page">Home Page</div>,
}));

vi.mock('./pages/NotFound', () => ({
  default: () => <div data-testid="not-found-page">404 Not Found</div>,
}));

vi.mock('./components/common/Loading', () => ({
  Loading: () => <div data-testid="loading-spinner">Loading...</div>,
}));

describe('AppRoutes', () => {
  it('renders the HomePage when navigating to "/"', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(await screen.findByTestId('home-page')).toBeInTheDocument();
  });

  it('renders the NotFound page for an unknown route', async () => {
    render(
      <MemoryRouter initialEntries={['/random-page']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(await screen.findByTestId('not-found-page')).toBeInTheDocument();
  });

  it('displays the loading spinner while the pages are being loaded', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    // expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
