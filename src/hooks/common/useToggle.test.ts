import { renderHook, act } from '@testing-library/react';
import { useToggle } from './useToggle';
import { describe, it, expect } from 'vitest';

describe('useToggle', () => {
  it('should initialize with false by default', () => {
    const { result } = renderHook(() => useToggle());
    const [value] = result.current;

    expect(value).toBe(false);
  });

  it('should initialize with given initial value', () => {
    const { result } = renderHook(() => useToggle(true));
    const [value] = result.current;

    expect(value).toBe(true);
  });

  it('should toggle value when toggle function is called', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[1](); // Call toggle
    });

    expect(result.current[0]).toBe(true); // Expect toggled value

    act(() => {
      result.current[1](); // Call toggle again
    });

    expect(result.current[0]).toBe(false); // Should toggle back
  });

  it('should work correctly with multiple toggles', () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => result.current[1]()); // Toggle → true
    expect(result.current[0]).toBe(true);

    act(() => result.current[1]()); // Toggle → false
    expect(result.current[0]).toBe(false);

    act(() => result.current[1]()); // Toggle → true
    expect(result.current[0]).toBe(true);
  });
});
