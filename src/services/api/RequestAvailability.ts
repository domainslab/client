import { getRequestSignature } from '../../utils/getRequestSignature';
import { makeGetBaseRequest } from './MakeBaseRequest';

const URL = 'domain_status'

export function getDomainStatusRequest(title){
  const options = {
    params:
      {
        domain: title
      },
    headers:
      {
        'X-DomainsLab-Auth': getRequestSignature()
      }
  }
  return makeGetBaseRequest(URL, options)
}
