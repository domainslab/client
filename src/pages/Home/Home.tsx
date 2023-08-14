import Header from 'pages/components/Header';
import Footer from 'pages/components/Footer';
import { ReactComponent as PreloaderIcon } from 'assets/icons/preloader.svg';

import Heading from './components/Heading';
import Search from './components/Search';
import DomainList from './components/DomainList';
import Separator from 'components/Separator/Separator';
import useSearch from './components/useSearch';

const DEFAULT_DOMAINS = [
  'ask.ai',
  'GeniAI.com',
  'DomGenius.ai',
  'AIpoweredDomains.com',
  'DomainWizard.ai',
];

const HomePage: React.FC = () => {
  const { isLoading, domains, query } = useSearch();

  return (
    <div>
      <Header active="" />
      <div className="max-w-[1000px] mt-[20px] mb-0 mx-auto flex flex-col gap-[50px] max-lg:px-[40px] max-sm:px-[20px] max-sm:gap-[30px]">
        <Heading />
        <Search
          onSearch={query}
          isLoading={isLoading}
        />
        <div className="flex flex-col gap-[20px]">
          <Separator />
          {isLoading ? (
            <div className="flex flex-col items-center">
              <PreloaderIcon
                viewBox="0 0 24 24"
                width="200"
                height="200"
                className="animate-spin"
              />
            </div>
          ) : (
            <>
              <h3 className="font-bold text-[1.625rem]">
                Take a look at what we've generated for you
              </h3>
              <DomainList domains={domains || DEFAULT_DOMAINS} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
