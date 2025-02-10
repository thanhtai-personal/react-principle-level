import { renderHook } from '@testing-library/react';
import { describe, test, expect, vi, Mock } from 'vitest';
import { useDataDetail } from './useDataDetail';
import { useQuery } from '@tanstack/react-query';
import { IDataResponse } from '@/interfaces/common/IDataResponse';

// Mock useQuery
vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}));

describe('useDataDetail', () => {
  const mockData = { id: '1', name: 'Test Data' };
  const mockServiceFunction = vi.fn(
    async (
      id: string
    ): Promise<IDataResponse<{ id: string; name: string }>> => ({
      data: { id, name: 'Test Data' }, // Must be under `data`
      status: 200, // Mock HTTP status
      statusText: 'OK',
      headers: {}, // Mock empty headers
      config: {
        headers: {} as any,
      },
    })
  );

  test('should call useQuery with correct queryKey and queryFn', () => {
    (useQuery as Mock).mockReturnValue({
      data: { result: mockData },
      refetch: vi.fn(),
      isLoading: false,
    });

    const { result } = renderHook(() =>
      useDataDetail('1', mockServiceFunction, { queryKey: 'testKey' })
    );

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: ['testKey', '1'],
      queryFn: expect.any(Function),
      enabled: true,
    });

    expect(result.current.data).toEqual(mockData);
  });

  test('should return undefined if id is not provided', () => {
    (useQuery as Mock).mockReturnValue({
      data: undefined,
      refetch: vi.fn(),
      isLoading: false,
    });

    const { result } = renderHook(() =>
      useDataDetail(undefined, mockServiceFunction)
    );

    expect(result.current.data).toBeUndefined();
    expect(useQuery).toHaveBeenCalledWith({
      queryKey: [undefined, undefined],
      queryFn: expect.any(Function),
      enabled: false, // Should be disabled when id is missing
    });
  });

  test('should return correct data using getDataPath', async () => {
    (useQuery as Mock).mockReturnValue({
      data: { nested: { result: mockData } },
      refetch: vi.fn(),
      isLoading: false,
    });

    const { result } = renderHook(() =>
      useDataDetail('1', mockServiceFunction, {
        queryKey: 'testKey',
        getDataPath: 'nested.result',
      })
    );

    expect(result.current.data).toEqual(mockData);
  });

  test('should return isLoading=true when query is fetching', () => {
    (useQuery as Mock).mockReturnValue({
      data: undefined,
      refetch: vi.fn(),
      isLoading: true,
    });

    const { result } = renderHook(() =>
      useDataDetail('1', mockServiceFunction, { queryKey: 'testKey' })
    );

    expect(result.current.isLoading).toBe(true);
  });

  test('should call refetch when needed', () => {
    const mockRefetch = vi.fn();

    (useQuery as Mock).mockReturnValue({
      data: { result: mockData },
      refetch: mockRefetch,
      isLoading: false,
    });

    const { result } = renderHook(() =>
      useDataDetail('1', mockServiceFunction, { queryKey: 'testKey' })
    );

    result.current.refetch();
    expect(mockRefetch).toHaveBeenCalled();
  });
});
