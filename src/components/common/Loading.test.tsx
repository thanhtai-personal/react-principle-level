import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';
import { vi, describe, it, expect } from 'vitest';

vi.mock('./shadcn/Spinner', () => ({
  Spinner: ({ className }: { className?: string }) => (
    <div data-testid="spinner" className={className}></div>
  ),
}));

describe('Loading Component', () => {
  it('renders default loading text when no props are provided', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders custom loading text when texts.loading is provided', () => {
    render(<Loading texts={{ loading: 'Please wait...' }} />);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('renders the Spinner component with the provided className', () => {
    const testClass = 'custom-spinner-class';
    render(<Loading className={testClass} />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass(testClass);
  });
});
