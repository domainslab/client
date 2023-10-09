import Header from 'pages/components/Header';
import Footer from 'pages/components/Footer';
import Heading from './components/Heading';
import Search from './components/Search';
import DomainList from './components/DomainList';
import { ReactComponent as BgLines } from 'assets/images/bg-lines.svg';
import { useViewportDimensions } from 'hooks/useViewportDimensions';
import { DomainContext } from '../../contexts/DomainContext/DomainContextProvider';
import { useContext } from 'react';
import Loader from 'components/Loader/Loader';

const HomePage: React.FC = () => {
  const [width] = useViewportDimensions();
  const {isLoading, domains} = useContext(DomainContext)


  return (
    <div>
      <BgLines
        {...{
          className: 'pointer-events-none block w-full absolute top-0 left-0 right-0',
          viewBox: width < 1200 ? `0 0 ${width} 549` : `0 0 1600 549`,
        }}
      />
      <Header active="" />
      <div className="min-h-[calc(100vh-162px)] max-w-[1000px] mt-[20px] mb-0 mx-auto flex flex-col gap-[70px] max-lg:px-[40px] max-sm:px-[20px] max-sm:gap-[30px]">
        <Heading />
        <Search />
        <div className="flex flex-col gap-[20px]">
            {
              isLoading && domains == [] ? (<div className='flex flex-col items-center mt-[30px]'><Loader /></div>) : (
                <>
                  {domains.length > 0 && (<DomainList />)}
                  {isLoading && (<div className='flex flex-col items-center mt-[30px]'><Loader /></div>)}
                </>)
            }
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
