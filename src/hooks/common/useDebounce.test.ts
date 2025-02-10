import { renderHook, act } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  test('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('Hello', 500));
    expect(result.current).toBe('Hello'); // Initial value should be returned immediately
  });

  test('should update the value only after the delay', async () => {
    vi.useFakeTimers(); // Mock timers

    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'Hello' },
      }
    );

    // Change value
    rerender({ value: 'World' });

    expect(result.current).toBe('Hello'); // Should not update immediately

    act(() => {
      vi.advanceTimersByTime(500); // Fast-forward time
    });

    expect(result.current).toBe('World'); // Now it should be updated
    vi.useRealTimers(); // Restore timers
  });

  test('should reset timer when value changes before delay', () => {
    vi.useFakeTimers();

    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'A' },
      }
    );

    rerender({ value: 'B' }); // Change value
    act(() => vi.advanceTimersByTime(300)); // Move 300ms forward (not enough time)
    rerender({ value: 'C' }); // Change value again

    act(() => vi.advanceTimersByTime(300)); // Move another 300ms forward (still not enough)
    expect(result.current).toBe('A'); // Should still be "A" (not updated yet)

    act(() => vi.advanceTimersByTime(200)); // Move 200ms more (now 500ms total since last change)
    expect(result.current).toBe('C'); // Now it should update

    vi.useRealTimers();
  });
});
