import { renderHook, act } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    vi.spyOn(window.localStorage.__proto__, 'getItem');
    vi.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should initialize with value from localStorage', () => {
    window.localStorage.setItem('testKey', JSON.stringify('Stored Value'));

    const { result } = renderHook(() => useLocalStorage('testKey', 'Default'));

    expect(result.current[0]).toBe('Stored Value');
  });

  test('should initialize with default value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('newKey', 'Default'));

    expect(result.current[0]).toBe('Default');
  });

  test('should update localStorage when setting a new value', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'Default'));

    act(() => {
      result.current[1]('New Value');
    });

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'testKey',
      JSON.stringify('New Value')
    );
    expect(result.current[0]).toBe('New Value');
  });

  test('should handle JSON parsing errors gracefully', () => {
    window.localStorage.setItem('testKey', '{ invalid json }');

    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const { result } = renderHook(() => useLocalStorage('testKey', 'Default'));

    expect(result.current[0]).toBe('Default');
    expect(consoleErrorSpy).toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });

  test('should handle errors when setting a value', () => {
    vi.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation(
      () => {
        throw new Error('Storage error');
      }
    );

    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const { result } = renderHook(() => useLocalStorage('testKey', 'Default'));

    act(() => {
      result.current[1]('New Value');
    });

    expect(consoleErrorSpy).toHaveBeenCalledWith(new Error('Storage error'));

    consoleErrorSpy.mockRestore();
  });
});
