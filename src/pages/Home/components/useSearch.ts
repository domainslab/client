/*import axios from 'axios';
import { useState, useCallback } from 'react';

import type { Domain } from 'types/domains';
import { getRequestSignature } from 'utils/getRequestSignature';


// TODO: Place in separate service
// TODO: Remove duplicaitons of api domain


type useSearchReturn = {
  isLoading: boolean;
  domains: Domain[] | null;
  query: (term: string, { tlds }: { tlds: string[] }) => void;
};

const useSearch = () => {

  const [isLoading, setloading] = useState<boolean>(false);

  const query = useCallback((term: string, { tlds }: { tlds: string[] }) => {
    setloading(true);

    axios
      .get(DOMAINS_API, {
        params: { desc: term, tlds: tlds.join(',') },
        headers: {
          'X-DomainsLab-Auth': getRequestSignature(),
        }
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

export default useSearch;*/
