import { get } from './base';

type GetDomainStatusResponse = {
  isAvailable: boolean;
};

export const getDomainStatus = (title: string) =>
  get<GetDomainStatusResponse>('domain_status', {
    params: {
      domain: title,
    },
  });
