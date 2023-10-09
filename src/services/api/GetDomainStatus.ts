import { get } from './base';

export function getDomainStatus(title){
  const options = {
    params:
      {
        domain: title
      }
  }
  return get('domain_status', options)
}
