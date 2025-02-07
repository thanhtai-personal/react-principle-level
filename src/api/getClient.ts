import axios from 'axios';
import { handleRefreshToken } from './handleRefreshToken';
import { defaultApiConfig } from './config';

export const getApiClient = (baseURL: string) => {
  handleRefreshToken(
    axios.create({
      ...defaultApiConfig,
      baseURL,
    })
  );
};
