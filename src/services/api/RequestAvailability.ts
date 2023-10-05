import axios from 'axios';
import { getRequestSignature } from '../../utils/getRequestSignature';

const DOMAINS_API = 'https://api.domainslab.ai/v1/domain_status';
//TODO функция makeBaseRequest принимает метод, параметры, хэдэры, боди, урла
export function apiDomainStatusRequest (title: string) : Promise<any>{
  return axios
    .get(DOMAINS_API, {
      params: { domain: title},
      headers: {
        'X-DomainsLab-Auth': getRequestSignature(),
      }
    })
}
