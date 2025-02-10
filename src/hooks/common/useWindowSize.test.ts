import { renderHook, act } from '@testing-library/react';
import { useWindowSize } from './useWindowSize';
import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('useWindowSize', () => {
  beforeEach(() => {
    // Mock window dimensions
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1024,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      value: 768,
    });
  });

  it('should return the initial window size', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current).toEqual({ width: 1024, height: 768 });
  });

  it('should update size when window is resized', () => {
    const { result } = renderHook(() => useWindowSize());

    // Simulate window resize
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        value: 1280,
      });
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        value: 720,
      });

      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toEqual({ width: 1280, height: 720 });
  });

  it('should remove event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useWindowSize());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
  });
});
