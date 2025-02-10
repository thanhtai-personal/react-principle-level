import { act, renderHook } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { useInterval } from './useInterval';

describe('useInterval', () => {
  test('should call the callback at specified intervals', () => {
    vi.useFakeTimers(); // Mock timers
    const callback = vi.fn();

    renderHook(() => useInterval(callback, 1000));

    expect(callback).not.toHaveBeenCalled(); // Should not be called immediately

    act(() => {
      vi.advanceTimersByTime(1000); // Fast-forward 1 second
    });
    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      vi.advanceTimersByTime(2000); // Fast-forward another 2 seconds
    });
    expect(callback).toHaveBeenCalledTimes(3); // Should be called 3 times in total

    vi.useRealTimers();
  });

  // test("should stop calling the callback when delay is null", () => {
  //   vi.useFakeTimers();
  //   const callback = vi.fn();
  //   const { rerender } = renderHook(({ delay }) => useInterval(callback, delay), {
  //     initialProps: { delay: 1000 },
  //   });

  //   act(() => {
  //     vi.advanceTimersByTime(2000);
  //   });
  //   expect(callback).toHaveBeenCalledTimes(2);

  //   rerender({ delay: 0 }); // Disable interval
  //   act(() => {
  //     vi.advanceTimersByTime(2000);
  //   });
  //   expect(callback).toHaveBeenCalledTimes(2); // Callback should not be called again

  //   vi.useRealTimers();
  // });

  test('should update the callback function without restarting interval', () => {
    vi.useFakeTimers();
    const callbackA = vi.fn();
    const callbackB = vi.fn();

    const { rerender } = renderHook(
      ({ callback }) => useInterval(callback, 1000),
      {
        initialProps: { callback: callbackA },
      }
    );

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(callbackA).toHaveBeenCalledTimes(1);
    expect(callbackB).not.toHaveBeenCalled();

    rerender({ callback: callbackB });

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(callbackA).toHaveBeenCalledTimes(1); // Old callback should not be called again
    expect(callbackB).toHaveBeenCalledTimes(1); // New callback should be called

    vi.useRealTimers();
  });
});
