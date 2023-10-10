import { Domain } from './domains';
import { AxiosResponse } from 'axios';


export type DomainContextType = {
  domains : Domain[],
  setDomains: (newValue: Domain[])=> void
  loading: boolean,
  setLoading: (newValue: boolean)=> void,
  lastPrompt: string,
  setLastPrompt: (newValue: string)=> void,
  lastTlds: string[],
  setLastTlds: (newValue: string[])=> void,
  addMoreDomains: () => Promise<AxiosResponse>
}

