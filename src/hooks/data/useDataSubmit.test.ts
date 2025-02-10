import { renderHook, act } from '@testing-library/react';
import { describe, test, expect, vi, Mock } from 'vitest';
import { useDataSubmit } from './useDataSubmit';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

// Mock useMutation from react-query
vi.mock('@tanstack/react-query', () => ({
  useMutation: vi.fn(),
}));

describe('useDataSubmit', () => {
  const mockCreateDataService = vi.fn(async (param) => {
    return {
      data: { message: 'Success', created: param },
      status: 201,
    } as AxiosResponse;
  });

  const mockSuccessCallback = vi.fn();

  test('should call mutate function correctly', async () => {
    let mutateFn: (params: any) => void = () => {};

    (useMutation as Mock).mockReturnValue({
      mutate: (params: any) => mutateFn(params),
      isPending: false,
      isSuccess: false,
      error: null,
      data: null,
    });

    const { result } = renderHook(() =>
      useDataSubmit(mockCreateDataService, mockSuccessCallback)
    );

    act(() => {
      result.current.mutate({ name: 'Test Data' });
    });

    // expect(mockCreateDataService).toHaveBeenCalledWith({ name: "Test Data" });
  });

  test('should return correct states when mutation is in progress', () => {
    (useMutation as Mock).mockReturnValue({
      mutate: vi.fn(),
      isPending: true,
      isSuccess: false,
      error: null,
      data: null,
    });

    const { result } = renderHook(() =>
      useDataSubmit(mockCreateDataService, mockSuccessCallback)
    );

    expect(result.current.isPending).toBe(true);
    expect(result.current.isSuccess).toBe(false);
  });

  test('should return correct states on mutation success', async () => {
    const mockResponse = {
      data: { message: 'Success', created: { name: 'Test Data' } },
      status: 201,
    };

    (useMutation as Mock).mockReturnValue({
      mutate: vi.fn(),
      isPending: false,
      isSuccess: true,
      error: null,
      data: mockResponse,
    });

    const { result } = renderHook(() =>
      useDataSubmit(mockCreateDataService, mockSuccessCallback)
    );
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toEqual(mockResponse);
    // expect(mockSuccessCallback).toHaveBeenCalled();
  });

  test('should return error state when mutation fails', () => {
    const mockError = new Error('Request failed');

    (useMutation as Mock).mockReturnValue({
      mutate: vi.fn(),
      isPending: false,
      isSuccess: false,
      error: mockError,
      data: null,
    });

    const { result } = renderHook(() =>
      useDataSubmit(mockCreateDataService, mockSuccessCallback)
    );

    expect(result.current.error).toBe(mockError);
  });
});
