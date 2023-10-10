import axios, { AxiosResponse } from 'axios';
import { getRequestSignature } from '../../utils/getRequestSignature';

const BASE_URL = 'http://localhost:3000/v1/';

export const get = <T>(featureURL, options: {params}) : Promise<AxiosResponse> => {
  return axios
    .get<T>(BASE_URL + featureURL,
      {
        params: options.params,
        headers:
          {
            'X-DomainsLab-Auth': getRequestSignature()
          }
      }
    )
};
