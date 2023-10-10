import { createContext } from 'react';
import { DomainContextType } from 'types/DomainContextType';
import { AxiosResponse } from 'axios';


export const DomainContext = createContext<DomainContextType>({
  domains: [],
  setDomains:()=> null,
  loading: false,
  setLoading: ()=> null,
  lastPrompt: '',
  setLastPrompt:()=> null,
  lastTlds: [],
  setLastTlds: ()=> null,
  addMoreDomains(): Promise<AxiosResponse> {return ;},
})

