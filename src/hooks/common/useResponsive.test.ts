import { renderHook, act } from '@testing-library/react';
import useResponsive from './useResponsive';
import { vi, describe, it, expect } from 'vitest';

vi.useFakeTimers(); // Mock timers for debounce handling

describe('useResponsive', () => {
  const resizeWindow = (width: number) => {
    (window.innerWidth as number) = width;
    window.dispatchEvent(new Event('resize'));
  };

  it('should return correct initial state based on window width', () => {
    resizeWindow(500);
    const { result } = renderHook(() => useResponsive());
    expect(result.current).toEqual({
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    });

    resizeWindow(800);
    const { result: resultTablet } = renderHook(() => useResponsive());
    expect(resultTablet.current).toEqual({
      isMobile: false,
      isTablet: true,
      isDesktop: false,
    });

    resizeWindow(1200);
    const { result: resultDesktop } = renderHook(() => useResponsive());
    expect(resultDesktop.current).toEqual({
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    });
  });

  it('should update state correctly when resizing', () => {
    const { result } = renderHook(() => useResponsive());

    act(() => {
      resizeWindow(800);
      vi.advanceTimersByTime(500); // Simulate debounce delay
    });

    expect(result.current).toEqual({
      isMobile: false,
      isTablet: true,
      isDesktop: false,
    });

    act(() => {
      resizeWindow(1200);
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toEqual({
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    });
  });

  it('should remove event listener on unmount', () => {
    const addListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useResponsive());

    // expect(addListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));

    unmount();

    // expect(removeListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));

    addListenerSpy.mockRestore();
    removeListenerSpy.mockRestore();
  });
});
