import { render, screen, fireEvent } from '@testing-library/react';
import { AppTopMenu } from './AppTopMenu';
import { menuItems } from '@/constant/menuItems';
import { vi, describe, it, expect } from 'vitest';

vi.mock('@/components/common/shadcn/sheet', () => ({
  Sheet: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetTrigger: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SheetContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sheet-content">{children}</div>
  ),
}));

vi.mock('@/components/common/shadcn/button', () => ({
  Button: ({ children, ...props }: { children: React.ReactNode }) => (
    <button {...props}>{children}</button>
  ),
}));

vi.mock('@/assets/icons/MenuIcon', () => ({
  MenuIcon: () => <svg data-testid="menu-icon" />,
}));

vi.mock('@/assets/icons/ShirtIcon', () => ({
  ShirtIcon: () => <svg data-testid="shirt-icon" />,
}));

describe('AppTopMenu Component', () => {
  it('renders the menu button', () => {
    render(<AppTopMenu />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });

  it('opens the sheet menu when the button is clicked', () => {
    render(<AppTopMenu />);

    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    expect(screen.getByTestId('sheet-content')).toBeInTheDocument();
  });

  it('renders the correct number of menu items', () => {
    render(<AppTopMenu />);
    expect(screen.getAllByRole('link')).toHaveLength(menuItems.length + 1); // Including the ShirtIcon link
  });

  it('renders menu items with correct label and URL', () => {
    render(<AppTopMenu />);

    menuItems.forEach((item) => {
      const linkElement = screen.getByText(item.label) as HTMLAnchorElement;
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.href).toContain(item.url);
    });
  });

  it('renders menu items with correct target attribute', () => {
    render(<AppTopMenu />);

    menuItems.forEach((item) => {
      const linkElement = screen.getByText(item.label) as HTMLAnchorElement;
      expect(linkElement).toHaveAttribute('target', item.target || '_self');
    });
  });
});
