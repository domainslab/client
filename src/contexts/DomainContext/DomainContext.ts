import { createContext } from 'react';
import { DomainContextType } from 'contexts/DomainContext/DomainContextType.ts';

export const DomainContext = createContext<DomainContextType>({
  domains: [],
  setDomains: () => null,
  isLoading: false,
  setLoading: () => null,
  lastPrompt: '',
  setLastPrompt: () => null,
  lastTlds: [],
  setLastTlds: () => null,
  loadMoreDomains: () => null,
});
