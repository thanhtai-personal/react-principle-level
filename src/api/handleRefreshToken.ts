import axios, { AxiosRequestConfig, AxiosError, AxiosInstance } from 'axios';

type PendingRequest = {
  config: AxiosRequestConfig;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
};

// Extend AxiosRequestConfig to include `_retry`
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export const handleRefreshToken = (
  apiClient: AxiosInstance,
  refreshPath?: string
) => {
  let accessToken = ''; // Store the access token

  let isRefreshing = false;
  let pendingRequests: PendingRequest[] = [];

  const refreshToken = async () => {
    try {
      const response = await axios.post(
        refreshPath || '/auth/refresh',
        {},
        { withCredentials: true }
      );
      accessToken = response.data.accessToken;
      return accessToken;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const abortController = new AbortController();

  apiClient.interceptors.request.use((config) => {
    if (accessToken && config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  });

  apiClient.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as CustomAxiosRequestConfig;

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            pendingRequests.push({ config: originalRequest, resolve, reject });
          });
        }

        isRefreshing = true;
        originalRequest._retry = true; // Mark request as retried
        abortController.abort(); // Cancel all pending requests
        pendingRequests = []; // Clear pending requests

        try {
          const newAccessToken = await refreshToken();
          apiClient.defaults.headers['Authorization'] =
            `Bearer ${newAccessToken}`;

          pendingRequests.forEach(({ config, resolve, reject }) => {
            if (config.headers) {
              config.headers['Authorization'] = `Bearer ${newAccessToken}`;
              apiClient.request(config).then(resolve).catch(reject);
            }
          });

          pendingRequests = [];
          return apiClient(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );

  return apiClient;
};
