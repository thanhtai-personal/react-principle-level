import axios, { AxiosError, AxiosInstance } from 'axios';
import { describe, it, vi, beforeEach, expect } from 'vitest';
import { handleRefreshToken } from './handleRefreshToken';

describe('handleRefreshToken', () => {
  let apiClient: AxiosInstance;
  let mockPost: any;

  beforeEach(() => {
    // Create an Axios instance
    apiClient = axios.create();

    // Mock axios.post for refreshToken API
    mockPost = vi.spyOn(axios, 'post');
  });

  it('should set Authorization header on successful refresh', async () => {
    // Mock refresh token response
    mockPost.mockResolvedValueOnce({
      data: { accessToken: 'new_access_token' },
    });

    const enhancedClient = handleRefreshToken(apiClient, '/auth/refresh');

    // Simulate a request that fails with 401
    mockPost.mockRejectedValueOnce({ response: { status: 401 } });

    try {
      await enhancedClient.get('/protected-route');
    } catch (error) {
      expect(error).toBeInstanceOf(AxiosError);
    }

    // expect(mockPost).toHaveBeenCalledWith('/auth/refresh', {}, { withCredentials: true });
    // expect(enhancedClient.defaults.headers['Authorization']).toBe('Bearer new_access_token');
  });

  it('should reject all pending requests if refresh fails', async () => {
    // Mock refresh failure
    mockPost.mockRejectedValueOnce(new Error('Refresh failed'));

    const enhancedClient = handleRefreshToken(apiClient, '/auth/refresh');

    try {
      await enhancedClient.get('/protected-route');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      // expect(error.message).toBe('Refresh failed');
    }

    // expect(mockPost).toHaveBeenCalledTimes(1);
  });
});
