import { DomainContext} from 'contexts/DomainContext/DomainContext';
import Home from './Home';
import { useState } from 'react';
import { Domain } from '../../types/domains';
import { getDomains } from '../../services/api/GetDomains';

const HomeWithContext: React.FC = () => {

  const [domains, setDomains] = useState<Domain[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [lastPrompt, setLastPrompt] = useState<string>('')
  const [lastTlds, setLastTlds] = useState<string[]>([])

  const addMoreDomains = () =>{
    return getDomains(lastPrompt, lastTlds)
      .then(res=>setDomains(prevState => [...prevState, ...res.data.domains]))
      .catch(console.error)
  }

  return (
      <DomainContext.Provider value={{ domains, setDomains, isLoading, setLoading, lastPrompt, setLastPrompt, lastTlds, setLastTlds, addMoreDomains }}>
        <Home/>
      </DomainContext.Provider>)
}
export default HomeWithContext

