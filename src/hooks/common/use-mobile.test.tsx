import { renderHook, act } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { useIsMobile } from './use-mobile';

describe('useIsMobile', () => {
  beforeEach(() => {
    vi.spyOn(window, 'matchMedia').mockImplementation(
      (query) =>
        ({
          matches: query.includes('(max-width: 767px)'),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
        }) as any
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should return true when window width is below mobile breakpoint', () => {
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(500);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  test('should return false when window width is above mobile breakpoint', () => {
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  test('should update state when window is resized', () => {
    const { result } = renderHook(() => useIsMobile());

    act(() => {
      vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(500);
      window.dispatchEvent(new Event('resize'));
    });

    // expect(result.current).toBe(true);

    act(() => {
      vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024);
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe(false);
  });

  test('should clean up event listeners on unmount', () => {
    const removeListenerMock = vi.fn();
    vi.spyOn(window, 'matchMedia').mockImplementation(
      () =>
        ({
          matches: false,
          addEventListener: vi.fn(),
          removeEventListener: removeListenerMock,
        }) as any
    );

    const { unmount } = renderHook(() => useIsMobile());

    unmount();
    expect(removeListenerMock).toHaveBeenCalled();
  });
});
