import { get } from './base';
import { AxiosResponse } from 'axios';
import { Domain } from '../../types/domains';

export function getDomains(prompt,tlds){
  const options = {
    params:
      {
        desc: prompt,
        tlds: tlds.join(',')
      }
  }
  return get<AxiosResponse<Domain[]>>('domains', options)
}

