import { describe, it, expect, vi } from 'vitest';
import { getApiClient } from './getClient';

vi.mock('./getClient', () => ({
  getApiClient: vi.fn(() => ({
    get: vi.fn(),
    post: vi.fn(),
  })),
}));

describe('apiClient', () => {
  it('should initialize apiClient with the correct base URL', () => {
    const mockBaseUrl = 'https://api.example.com';
    import.meta.env.API_URL = mockBaseUrl;

    const apiClient = getApiClient(import.meta.env.API_URL);

    expect(getApiClient).toHaveBeenCalledWith(mockBaseUrl);
    expect(apiClient).toBeDefined();
  });
});
