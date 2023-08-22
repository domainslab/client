import Button from 'components/Button';
import Header from './components/Header';
import Footer from './components/Footer';
import { ReactComponent as BuddyImg } from 'assets/images/buddy.svg';
import { useNavigate } from 'react-router-dom';

const UnderConstruction: React.FC = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="px-[40px] my-0 mx-auto max-w-[1140px] min-h-[calc(100vh-162px)] flex gap-x-[10px] gap-y-[50px] justify-between items-center max-lg:flex-col-reverse max-lg:items-start max-lg:justify-center max-sm:px-[20px]">
        <BuddyImg className="block shrink-0 max-lg:self-center max-lg:w-full" />
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-AccentLight text-[2.5rem] leading-normal font-bold max-sm:text-[1.875rem]">
            Come back later &#60;3
          </h1>
          <h2 className="text-Secondary font-bold leading-normal text-[1.25rem]">
            This page is still under construction!
          </h2>
          <div className="mt-[20px]">
            <Button
              onClick={onButtonClick}
              className="max-sm:w-full"
            >
              Go to Homepage
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UnderConstruction;
