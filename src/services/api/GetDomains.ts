import { get } from './base';

export function getDomains(prompt,tlds){
  const options = {
    params:
      {
        desc: prompt,
        tlds: tlds.join(',')
      }
  }
  return get('domains', options)
}

