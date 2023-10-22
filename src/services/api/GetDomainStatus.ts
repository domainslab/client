import { get } from './base';
import { AxiosResponse } from 'axios';

export function getDomainStatus(title: string): Promise<AxiosResponse<boolean>> {
  const options = {
    params: {
      domain: title,
    },
  };
  return get<boolean>('domain_status', options);
}
