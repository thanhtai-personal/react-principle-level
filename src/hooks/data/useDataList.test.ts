import { renderHook } from '@testing-library/react';
import { describe, test, expect, vi, Mock } from 'vitest';
import { useDataList } from './useDataList';
import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';

// Mock useQuery
vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}));

// Mock API client
const mockApiClient: AxiosInstance = {
  get: vi.fn(),
} as unknown as AxiosInstance;

describe('useDataList', () => {
  const mockParams = { page: 1, limit: 10 };
  const mockApiPath = '/test-api';
  const mockResponse = {
    data: {
      items: [{ id: '1', name: 'Test Item' }],
      totalCount: 100,
      totalPages: 10,
    },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  };

  test('should call useQuery with correct queryKey and queryFn', () => {
    (useQuery as Mock).mockReturnValue({
      data: mockResponse,
      refetch: vi.fn(),
      isLoading: false,
    });

    const { result } = renderHook(() =>
      useDataList(mockParams, mockApiPath, {
        queryKey: 'testQueryKey',
        apiClient: mockApiClient,
      })
    );

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ['testQueryKey', mockApiPath, mockParams],
      queryFn: expect.any(Function),
      enabled: true,
    });

    expect(result.current[0].dataList).toEqual(mockResponse.data.items);
  });

  test('should return empty array when no data is available', () => {
    (useQuery as Mock).mockReturnValue({
      data: { data: { items: [], totalCount: 0, totalPages: 1 } },
      refetch: vi.fn(),
      isLoading: false,
    });

    const { result } = renderHook(() =>
      useDataList(mockParams, mockApiPath, {
        queryKey: 'testQueryKey',
        apiClient: mockApiClient,
      })
    );

    expect(result.current[0].dataList).toEqual([]);
    expect(result.current[0].pagination?.totalCount).toBe(0);
    expect(result.current[0].pagination?.totalPages).toBe(1);
  });

  test('should return correct pagination values', () => {
    (useQuery as Mock).mockReturnValue({
      data: mockResponse,
      refetch: vi.fn(),
      isLoading: false,
    });

    const { result } = renderHook(() =>
      useDataList(mockParams, mockApiPath, {
        queryKey: 'testQueryKey',
        apiClient: mockApiClient,
      })
    );

    expect(result.current[0].pagination?.totalCount).toBe(100);
    expect(result.current[0].pagination?.totalPages).toBe(10);
  });

  test('should return isLoading=true when query is fetching', () => {
    (useQuery as Mock).mockReturnValue({
      data: undefined,
      refetch: vi.fn(),
      isLoading: true,
    });

    const { result } = renderHook(() =>
      useDataList(mockParams, mockApiPath, {
        queryKey: 'testQueryKey',
        apiClient: mockApiClient,
      })
    );

    expect(result.current[0].isLoading).toBe(true);
  });

  test('should call refetch when needed', async () => {
    const mockRefetch = vi.fn();

    (useQuery as Mock).mockReturnValue({
      data: mockResponse,
      refetch: mockRefetch,
      isLoading: false,
    });

    const { result } = renderHook(() =>
      useDataList(mockParams, mockApiPath, {
        queryKey: 'testQueryKey',
        apiClient: mockApiClient,
      })
    );

    result.current[1]?.refetch?.();
    expect(mockRefetch).toHaveBeenCalled();
  });
});
