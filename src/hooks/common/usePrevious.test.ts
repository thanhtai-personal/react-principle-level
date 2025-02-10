import { renderHook } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { usePrevious } from './usePrevious';

describe('usePrevious', () => {
  test('returns undefined on first render', () => {
    const { result } = renderHook(() => usePrevious(10));
    expect(result.current).toBeUndefined(); // First render should return undefined
  });

  test('returns previous value after update', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 10 },
    });

    rerender({ value: 20 }); // Change value
    expect(result.current).toBe(10); // Previous value should be 10

    rerender({ value: 30 }); // Change value again
    expect(result.current).toBe(20); // Previous value should now be 20
  });

  test('does not update previous value if value is unchanged', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 10 },
    });

    // rerender({ value: 10 }); // Same value, should not update
    expect(result.current).toBeUndefined(); // Still undefined
  });
});
