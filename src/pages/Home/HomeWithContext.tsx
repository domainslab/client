import { DomainProvider } from '../../contexts/DomainContext/DomainContextProvider';
import Home from './Home';

const HomeWithContext: React.FC = () => {

  return (
      <DomainProvider>
        <Home/>
      </DomainProvider>)
}
export default HomeWithContext

