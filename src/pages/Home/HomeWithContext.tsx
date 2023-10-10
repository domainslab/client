import { DomainContext } from 'contexts/DomainContext/DomainContext.ts';
import Home from './Home';
import { useState } from 'react';
import { Domain } from 'types/domains';
import { getDomains } from 'services/api/GetDomains';

const HomeWithContext: React.FC = () => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [lastPrompt, setLastPrompt] = useState<string>('');
  const [lastTlds, setLastTlds] = useState<string[]>([]);

  const loadMoreDomains = async () => {
    setLoading(true);
    const response = await getDomains(lastPrompt, lastTlds);
    setDomains(prevDomains => [...prevDomains, ...response.data.domains]);
    setLoading(false);
  };

  return (
    <DomainContext.Provider
      value={{
        domains,
        setDomains,
        isLoading,
        setLoading,
        lastPrompt,
        setLastPrompt,
        lastTlds,
        setLastTlds,
        loadMoreDomains,
      }}
    >
      <Home />
    </DomainContext.Provider>
  );
};
export default HomeWithContext;
