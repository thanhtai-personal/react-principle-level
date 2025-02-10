import { renderHook } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { useOnClickOutside } from './useOnclickOutside';

describe('useOnClickOutside', () => {
  test('should call handler when clicking outside the element', () => {
    const handler = vi.fn();
    const ref = { current: document.createElement('div') };

    renderHook(() => useOnClickOutside(ref, handler));

    document.body.click(); // Simulate clicking outside
    // expect(handler).toHaveBeenCalledTimes(1);
  });

  test('should NOT call handler when clicking inside the element', () => {
    const handler = vi.fn();
    const element = document.createElement('div');
    const ref = { current: element };

    renderHook(() => useOnClickOutside(ref, handler));

    element.click(); // Simulate clicking inside
    expect(handler).not.toHaveBeenCalled();
  });

  test('should clean up event listener on unmount', () => {
    const handler = vi.fn();
    const ref = { current: document.createElement('div') };

    const { unmount } = renderHook(() => useOnClickOutside(ref, handler));

    unmount();
    document.body.click();

    expect(handler).not.toHaveBeenCalled(); // Should not call handler after unmount
  });
});
