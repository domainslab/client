import { useContext} from 'react';

/*interface DomainContext{
  domains: Domain[];
  lastPrompt: string;
  lastTlds: string[];
  //addNewDomains: (domains: Domain[]) => void
}*/

import {  DomainContext } from './DomainContextProvider';
//TODO убрать, оставить только провайдер

export function useDomainContext(){
  const domainContext = useContext(DomainContext)
  if(domainContext === undefined){
    throw new Error(' useDomainContext must be used with a DomainContext')
  }
  return domainContext
}
