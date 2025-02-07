import { useQuery } from '@tanstack/react-query';
import { Axios, AxiosInstance } from 'axios';
import { useMemo } from 'react';
import { IDataResponse } from '@/interfaces/common/IDataResponse';
import { IPaginationResponse } from '@/interfaces/common/IPaginationResponse';
import { get } from '@/utils/lodash';
import { buildParams } from '@/utils/buildParams';

export const useDataList = <T, K>(
  params: K,
  apiPath: string,
  options?: {
    queryKey?: string;
    apiClient?: AxiosInstance;
    getDataPath?: string;
  }
) => {
  const { queryKey, apiClient = new Axios(), getDataPath } = options || {};
  const query = [queryKey, apiPath, params];
  const queryFn = async () => {
    if (params) {
      const finalParams = buildParams(params);
      const response: any = await apiClient.get<
        IDataResponse<IPaginationResponse<T>, any>
      >(apiPath, {
        params: finalParams,
      });
      return getDataPath ? get(response, getDataPath) : response;
    }
    return null;
  };

  const { data, isLoading, refetch } = useQuery<
    IDataResponse<IPaginationResponse<T> | null, any>
  >({
    queryKey: query,
    queryFn,
    enabled: !!params,
  });
  const pagination = useMemo(
    () => ({
      totalCount: data?.data?.totalCount || 0,
      totalPages: data?.data?.totalPages || 1,
    }),
    [data]
  );

  return [
    {
      isLoading,
      pagination,
      dataList: data?.data?.items || [],
    },
    {
      refetch,
    },
  ];
};
