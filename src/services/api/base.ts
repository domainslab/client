import axios, { AxiosResponse } from 'axios';
import { getRequestSignature } from 'utils/getRequestSignature';
import { RequestOptions } from './types.ts';

const BASE_URL = 'https://api.domainslab.ai/v1/';

export const get = <T>(featureURL: string, options: RequestOptions): Promise<AxiosResponse<T>> => {
  return axios.get<T>(BASE_URL + featureURL, {
    params: options.params,
    headers: { ...options.headers, 'X-DomainsLab-Auth': getRequestSignature() },
  });
};
