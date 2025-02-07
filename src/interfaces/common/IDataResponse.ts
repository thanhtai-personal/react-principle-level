import { AxiosResponse } from 'axios';

export interface IDataResponse<T = any, D = any> extends AxiosResponse<T, D> {
  // data: T;
  // status: number;
  // statusText: string;
  // headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  // config: InternalAxiosRequestConfig<D>;
  // request?: any;
}
