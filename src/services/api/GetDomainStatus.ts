import { get } from './base';
import { AxiosResponse } from 'axios';

export function getDomainStatus(title){
  const options = {
    params:
      {
        domain: title
      }
  }
  return get<AxiosResponse<boolean>>('domain_status', options)
}
