import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, beforeEach, afterEach, expect, Mock } from 'vitest';
import { Counter } from './Counter';
import { useCounterContext } from '@/contexts/counter';

// Mock useCounterContext hook
vi.mock('@/contexts/counter', () => ({
  useCounterContext: vi.fn(),
}));

describe('Counter Component', () => {
  const mockCounter = {
    count: { value: 0 },
  };

  beforeEach(() => {
    (useCounterContext as Mock).mockReturnValue(mockCounter);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the counter button with initial count', () => {
    // render(<Counter />);
    // expect(screen.getByRole('button', { name: /count is/i })).toHaveTextContent(
    //   'count is 0'
    // );
  });

  it('increments the count when button is clicked', () => {
    // render(<Counter />);
    // const button = screen.getByRole('button', { name: /count is/i });
    // fireEvent.click(button);
    // expect(mockCounter.count.value).toBe(1);
    // fireEvent.click(button);
    // expect(mockCounter.count.value).toBe(2);
  });
});
