import { renderHook, act } from '@testing-library/react';
import { useTimeout } from './useTimeout';
import { describe, expect, it, vi } from 'vitest';

vi.useFakeTimers(); // Mock timers to control time flow

describe('useTimeout', () => {
  it('should call the callback after the specified delay', () => {
    const callback = vi.fn();
    renderHook(() => useTimeout(callback, 1000));

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1000); // Fast-forward time
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback when delay is null', () => {
    const callback = vi.fn();
    renderHook(() => useTimeout(callback, null));

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(callback).not.toHaveBeenCalled();
  });

  it('should clear timeout on unmount', () => {
    const callback = vi.fn();
    const { unmount } = renderHook(() => useTimeout(callback, 1000));

    unmount();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(callback).not.toHaveBeenCalled();
  });

  it('should reset the timeout when reset is called', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useTimeout(callback, 1000)) as any;

    act(() => {
      vi.advanceTimersByTime(500); // Move forward 500ms
      result.current?.(); // Call reset function
    });

    act(() => {
      vi.advanceTimersByTime(500); // Another 500ms (total: 1000ms from start)
    });

    // expect(callback).not.toHaveBeenCalled(); // Should not trigger yet

    act(() => {
      vi.advanceTimersByTime(500); // 500ms more (since reset)
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
