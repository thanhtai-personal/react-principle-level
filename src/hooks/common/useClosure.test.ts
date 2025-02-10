import { renderHook } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { useClosure } from './useClosure';

describe('useClosure', () => {
  test('should always call the latest callback', () => {
    const initialCallback = vi.fn(() => 'Initial');
    const updatedCallback = vi.fn(() => 'Updated');

    const { result, rerender } = renderHook(({ cb }) => useClosure(cb), {
      initialProps: { cb: initialCallback },
    });

    // Call the returned function
    expect(result.current()).toBe('Initial');
    expect(initialCallback).toHaveBeenCalledTimes(1);

    // Update the callback
    rerender({ cb: updatedCallback });

    // Call the returned function again
    expect(result.current()).toBe('Updated');
    expect(updatedCallback).toHaveBeenCalledTimes(1);
  });

  test('should return a stable function reference', () => {
    const callback = vi.fn();
    const { result, rerender } = renderHook(() => useClosure(callback));

    const initialRef = result.current;

    // Rerender with the same callback
    rerender();

    expect(result.current).toBe(initialRef); // Function reference should not change
  });
});
