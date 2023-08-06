import Header from 'pages/components/Header';

import Heading from './components/Heading';
import Search from './components/Search';
import DomainList from './components/DomainList';
import Separator from 'components/Separator/Separator';

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
        <div className='flex flex-col gap-[20px]'>
          <Separator />
          <h3 className='font-bold text-[26px]'>Take a look at what we've generated for you</h3>
          <DomainList domains={domains} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
