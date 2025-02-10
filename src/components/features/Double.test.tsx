import { render, screen } from '@testing-library/react';
import { describe, it, vi, beforeEach, afterEach, expect, Mock } from 'vitest';
import { Double } from './Double';
import { useCounterContext } from '@/contexts/counter';

// Mock useCounterContext hook
vi.mock('@/contexts/counter', () => ({
  useCounterContext: vi.fn(),
}));

describe('Double Component', () => {
  beforeEach(() => {
    (useCounterContext as Mock).mockReturnValue({ double: 10 });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the double value', () => {
    render(<Double />);
    expect(screen.getByText(/Double is 10/)).toBeInTheDocument();
  });
});
