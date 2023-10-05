import axios from 'axios';
import { getRequestSignature } from '../../utils/getRequestSignature';

const DOMAINS_API = 'https://api.domainslab.ai/v1/domains';

export function apiRequest (prompt: string, tlds: string[]) : Promise<any>{
 return axios
    .get(DOMAINS_API, {
      params: { desc: prompt, tlds: tlds.join(',') },
      headers: {
        'X-DomainsLab-Auth': getRequestSignature(),
      }
    })
}
