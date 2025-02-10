import axios from 'axios';
import { describe, it, vi, expect } from 'vitest';
import { handleRefreshToken } from './handleRefreshToken';
import { defaultApiConfig } from './config';
import { getApiClient } from './getClient';

vi.mock('axios'); // Mock axios
vi.mock('./handleRefreshToken'); // Mock handleRefreshToken

describe('getApiClient', () => {
  it('should create an axios instance and pass it to handleRefreshToken', () => {
    const mockBaseURL = 'https://api.example.com';

    getApiClient(mockBaseURL);

    expect(axios.create).toHaveBeenCalledWith({
      ...defaultApiConfig,
      baseURL: mockBaseURL,
    });

    expect(handleRefreshToken).toHaveBeenCalled();
  });
});
