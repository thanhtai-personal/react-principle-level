import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '@/pages/NotFound';
import { describe, it, expect } from 'vitest';

describe('NotFound Page', () => {
  it('renders NotFound component with correct text', () => {
    render(<NotFound />);

    // Check if the text "Not found" is present in the document
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
