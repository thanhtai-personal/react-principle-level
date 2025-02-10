import { render, screen } from '@testing-library/react';
import { AppNavigationMenu } from './AppNavigationMenu';
import { menuItems } from '@/constant/menuItems';
import { vi, describe, it, expect } from 'vitest';

vi.mock('@/components/common/shadcn/navigation-menu', () => ({
  NavigationMenu: ({ children }: { children: React.ReactNode }) => (
    <nav data-testid="navigation-menu">{children}</nav>
  ),
  NavigationMenuList: ({ children }: { children: React.ReactNode }) => (
    <ul data-testid="navigation-menu-list">{children}</ul>
  ),
  NavigationMenuLink: ({ children }: { children: React.ReactNode }) => (
    <li data-testid="navigation-menu-link">{children}</li>
  ),
}));

describe('AppNavigationMenu Component', () => {
  it('renders the navigation menu container', () => {
    render(<AppNavigationMenu />);
    expect(screen.getByTestId('navigation-menu')).toBeInTheDocument();
  });

  it('renders the correct number of menu items', () => {
    render(<AppNavigationMenu />);
    expect(screen.getAllByTestId('navigation-menu-link')).toHaveLength(
      menuItems.length
    );
  });

  it('renders menu items with correct label and URL', () => {
    render(<AppNavigationMenu />);

    menuItems.forEach((item) => {
      const linkElement = screen.getByText(item.label) as HTMLAnchorElement;
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.href).toContain(item.url); // Checking the URL
    });
  });

  it('renders menu items with correct target attribute', () => {
    render(<AppNavigationMenu />);

    menuItems.forEach((item) => {
      const linkElement = screen.getByText(item.label) as HTMLAnchorElement;
      expect(linkElement).toHaveAttribute('target', item.target || '_self');
    });
  });
});
