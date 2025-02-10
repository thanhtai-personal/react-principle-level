import { act, renderHook } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { useToast, toast } from './use-toast';

describe('useToast', () => {
  test('should add a toast', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({ title: 'Test Toast', description: 'This is a test' });
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0]).toMatchObject({
      title: 'Test Toast',
      description: 'This is a test',
      open: true,
    });
  });

  test('should update a toast', () => {
    const { result } = renderHook(() => useToast());

    let toastItem: ReturnType<typeof toast>;

    act(() => {
      toastItem = toast({
        title: 'Initial Title',
        description: 'Initial Desc',
      });
    });

    act(() => {
      toastItem.update({ title: 'Updated Title' } as any);
    });

    expect(result.current.toasts[0]).toMatchObject({
      title: 'Updated Title',
      description: 'Initial Desc',
    });
  });

  test('should dismiss a toast', () => {
    const { result } = renderHook(() => useToast());

    let toastItem: ReturnType<typeof toast>;

    act(() => {
      toastItem = toast({ title: 'Dismiss Test' });
    });

    act(() => {
      toastItem.dismiss();
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  test('should remove a toast after timeout', () => {
    vi.useFakeTimers();

    const { result } = renderHook(() => useToast());

    let toastItem: ReturnType<typeof toast>;

    act(() => {
      toastItem = toast({ title: 'Remove Test' });
    });

    act(() => {
      result.current.dismiss(toastItem.id);
      vi.advanceTimersByTime(1000000); // Simulate timeout
    });

    expect(result.current.toasts).toHaveLength(0);

    vi.useRealTimers();
  });
});
