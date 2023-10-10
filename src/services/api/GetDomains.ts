import { get } from './base';
import { AxiosResponse } from 'axios';
import { Domain } from 'types/domains';
import { RequestOptions } from './types.ts';

export function getDomains(prompt: string, tlds: string[]): Promise<AxiosResponse<Domain[]>> {
  const options: RequestOptions = {
    params: {
      desc: prompt,
      tlds: tlds.join(','),
    },
  };
  return get<Domain[]>('domains', options);
}
