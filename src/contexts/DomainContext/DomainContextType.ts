import { Domain } from 'types/domains.ts';

export type DomainContextType = {
  domains: Domain[];
  setDomains: (newValue: Domain[]) => void;
  isLoading: boolean;
  setLoading: (newValue: boolean) => void;
  lastPrompt: string;
  setLastPrompt: (newValue: string) => void;
  lastTlds: string[];
  setLastTlds: (newValue: string[]) => void;
  loadMoreDomains: () => void;
};
