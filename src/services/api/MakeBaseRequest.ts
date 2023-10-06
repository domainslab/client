import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3000/v1/';

export const makeGetBaseRequest = (featureURL, options: {params, headers}) : Promise<AxiosResponse> => {
  return axios
    .get(BASE_URL + featureURL,
      {
        params: options.params,
        headers: options.headers
      }
    )
};
