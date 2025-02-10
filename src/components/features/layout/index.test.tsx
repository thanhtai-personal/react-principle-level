import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { Layout } from './index';

// Mock MobX store
const mockStore = {
  ui: {
    showHeader: true, // Default to show the header
  },
};

vi.mock('@/store', () => ({
  useStore: () => mockStore,
}));

// Mock external components
vi.mock('@/components/common/shadcn/scroll-area', () => ({
  ScrollArea: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="scroll-area">{children}</div>
  ),
}));

vi.mock('./Header', () => ({
  Header: () => <header data-testid="header" />,
}));

describe('Layout Component', () => {
  it('renders the ScrollArea component', () => {
    render(<Layout>Test Content</Layout>);
    expect(screen.getByTestId('scroll-area')).toBeInTheDocument();
  });

  it('renders the Header component when ui.showHeader is true', () => {
    render(<Layout>Test Content</Layout>);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('does not render the Header component when ui.showHeader is false', () => {
    mockStore.ui.showHeader = false; // Modify mockStore for this test
    render(<Layout>Test Content</Layout>);
    expect(screen.queryByTestId('header')).not.toBeInTheDocument();
  });

  it('renders the children content', () => {
    render(
      <Layout>
        <div data-testid="child">Child Content</div>
      </Layout>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
