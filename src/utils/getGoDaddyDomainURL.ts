const GODADDY_DOMAIN_URL = 'https://www.godaddy.com/domainsearch/find';

export const getGoDaddyDomainURL = (domain: string) =>
  `${GODADDY_DOMAIN_URL}?checkAvail=1&domainToCheck=${domain}`;
