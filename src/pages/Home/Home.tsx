import Header from 'pages/components/Header';

import Heading from './components/Heading';
import Search from './components/Search';
import DomainList from './components/DomainList';

// temporary hardcoded
const domains = ['ask.ai', 'GeniAI.com', 'DomGenius.ai', 'AIpoweredDomains.com', 'DomainWizard.ai']
// const domains = ['GeniAI.com']

const HomePage: React.FC = () => {
  return (
    <div>
      <Header active="" />
      <div className="max-w-[1000px] mt-[20px] mb-0 mx-auto flex flex-col gap-[50px]">
        <Heading />
        <Search />
        <DomainList domains={domains} />
      </div>
    </div>
  );
};

export default HomePage;
