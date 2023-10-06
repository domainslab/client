import { getRequestSignature } from '../../utils/getRequestSignature';
import { makeGetBaseRequest } from './MakeBaseRequest';

const URL = 'domains'

export function getNewDomainListRequest(prompt,tlds){
  const options = {
    params:
      {
        desc: prompt,
        tlds: tlds.join(',')
      },
    headers:
      {
        'X-DomainsLab-Auth': getRequestSignature()
      }
  }
  return makeGetBaseRequest(URL, options)
}

