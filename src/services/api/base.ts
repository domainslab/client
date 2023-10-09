import axios, { AxiosResponse } from 'axios';
import { getRequestSignature } from '../../utils/getRequestSignature';

const BASE_URL = 'https://api.domainslab.ai/v1/';

export const get = (featureURL, options: {params}) : Promise<AxiosResponse> => {
  return axios
    .get(BASE_URL + featureURL,
      {
        params: options.params,
        headers:
          {
            'X-DomainsLab-Auth': getRequestSignature()
          }
      }
    )
};
