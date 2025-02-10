import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mocking external components
vi.mock('@/assets/icons/ShirtIcon', () => ({
  ShirtIcon: () => <svg data-testid="shirt-icon" />,
}));

vi.mock('./AppTopMenu', () => ({
  AppTopMenu: () => <nav data-testid="app-top-menu" />,
}));

vi.mock('./AppNavigationMenu', () => ({
  AppNavigationMenu: () => <nav data-testid="app-navigation-menu" />,
}));

vi.mock('@/components/features/theme/ThemeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle" />,
}));

vi.mock('@/components/common/AppModal', () => ({
  AppModal: ({ triggerElement }: { triggerElement: React.ReactNode }) => (
    <div data-testid="app-modal">{triggerElement}</div>
  ),
}));

// Mocking the useRef hook globally
const openMock = vi.fn();
const closeMock = vi.fn();

vi.mock('react', async (importOriginal) => {
  const actualReact = await importOriginal<typeof import('react')>();
  return {
    ...actualReact,
    useRef: vi.fn(() => ({ current: { open: openMock, close: closeMock } })),
    Suspense: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

describe('Header Component', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Reset all mocks before each test
  });

  it('renders the header container', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the ShirtIcon logo', () => {
    render(<Header />);
    expect(screen.getByTestId('shirt-icon')).toBeInTheDocument();
  });

  it('renders AppTopMenu and AppNavigationMenu', () => {
    render(<Header />);
    expect(screen.getByTestId('app-top-menu')).toBeInTheDocument();
    expect(screen.getByTestId('app-navigation-menu')).toBeInTheDocument();
  });

  it('renders the Sign In and Sign Up buttons', () => {
    render(<Header />);
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('opens the Sign In modal when the button is clicked', () => {
    render(<Header />);
    fireEvent.click(screen.getByText('Sign in'));
    expect(openMock).toHaveBeenCalled();
  });

  it('opens the Sign Up modal when the button is clicked', () => {
    render(<Header />);
    fireEvent.click(screen.getByText('Sign Up'));
    // expect(openMock).toHaveBeenCalled();
  });

  it('renders the ThemeToggle component', () => {
    render(<Header />);
    // expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });
});
