import { getApiClient } from './getClient';

export const apiClient = getApiClient(import.meta.env.API_URL);
