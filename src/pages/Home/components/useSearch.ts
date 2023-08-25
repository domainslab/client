import axios from 'axios';
import { useState, useCallback } from 'react';

import type { Domain } from 'types/domains';
import { getRequestSignature } from 'utils/getRequestSignature';

// TODO: Place in separate service
// TODO: Remove duplicaitons of api domain
const DOMAINS_API = 'http://localhost:3000/v1/domains';

type useSearchReturn = {
  isLoading: boolean;
  domains: Domain[] | null;
  query: (term: string, { tlds }: { tlds: string[] }) => void;
};

const useSearch = (): useSearchReturn => {
  const [isLoading, setloading] = useState<boolean>(false);
  const [domains, setDomains] = useState<Domain[] | null>(null);

  const query = useCallback((term: string, { tlds }: { tlds: string[] }) => {
    setloading(true);

    axios
      .get(DOMAINS_API, {
        params: { desc: term, tlds: tlds.join(',') },
        headers: {
          'X-DomainsLab-Auth': getRequestSignature(),
        },
      })
      .then(res => setDomains(res.data.domains))
      .catch(console.error)
      .finally(() => setloading(false));
  }, []);

  return {
    isLoading,
    domains,
    query,
  };
};

export default useSearch;
