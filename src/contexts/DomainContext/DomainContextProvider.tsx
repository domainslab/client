import { createContext, useState } from 'react';
import { Domain } from '../../types/domains';
import { getDomains } from '../../services/api/GetDomains';
import { DomainContextType } from '../../types/DomainContextType';

export const DomainContext = createContext<DomainContextType>([])

export const DomainProvider = ({children}) =>{

  const [domains, setDomains] = useState<Domain[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [lastPrompt, setLastPrompt] = useState<string>('')
  const [lastTlds, setLastTlds] = useState<string[]>([])

  const addMoreDomains = () =>{
    return getDomains(lastPrompt, lastTlds)
      .then(res=>setDomains(prevState => [...prevState, ...res.data.domains]))
      .catch(console.error)
  }


  return(
    <DomainContext.Provider value={{domains, setDomains, isLoading, setLoading, lastPrompt, setLastPrompt ,lastTlds, setLastTlds, addMoreDomains }}>
      {children}
    </DomainContext.Provider>
  )
}
