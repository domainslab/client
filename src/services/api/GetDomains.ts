import { get } from './base';
import { Domain } from 'types/domains';

type GetDomainsResponse = {
  domains: Domain[];
};

export const getDomains = (prompt: string, tlds: string[]) =>
  get<GetDomainsResponse>('domains', {
    params: {
      desc: prompt,
      tlds: tlds.join(','),
    },
  });
