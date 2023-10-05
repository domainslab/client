import { createContext, useState } from 'react';
import { Domain } from '../../types/domains';
import { apiRequest } from '../../services/api/RequestDomains';


export const DomainContext = createContext<any>(undefined)

export const DomainProvider = ({children}) =>{



  const [domains, setDomains] = useState<Domain[] | null>([])
  const [isLoading, setLoading]=useState<boolean>(false)
  const [lastPrompt, setLastPrompt] = useState<string>('')
  const [lastTlds, setLastTlds]=useState<string[]>([])

  const addMoreDomains = () =>{
    return apiRequest(lastPrompt, lastTlds)
      .then(res=>setDomains(addDomainsToExisting(res.data.domains)))
      .catch(console.error)
  }
  const  addDomainsToExisting = (newDomains: Domain[]) :Domain[]=>{
    return domains?.concat(newDomains)
  }

  return(
    <DomainContext.Provider value={{domains, setDomains, isLoading, setLoading, lastPrompt, setLastPrompt ,lastTlds, setLastTlds, addMoreDomains }}>
      {children}
    </DomainContext.Provider>
  )
}
