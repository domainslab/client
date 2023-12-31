import { ReactComponent as KittenImg } from 'assets/images/kitten.svg';
import Footer from './components/Footer';
import Header from './components/Header';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const ErrorBoundary: React.FC = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="px-[40px] my-0 mx-auto max-w-[1248px] min-h-[calc(100vh-162px)] flex gap-x-[10px] gap-y-[50px] justify-between items-center max-lg:flex-col max-lg:items-start max-lg:justify-center max-sm:px-[20px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-AccentLight text-[2.5rem] leading-normal font-bold max-sm:text-[1.875rem]">
            Ooops!
            <br />
            Page Not Found
          </h1>
          <h2 className="text-Secondary font-bold leading-normal text-[1.25rem]">
            Sorry, we couldn't find the page you were looking for!
            <br /> We suggest you to go back to the Homepage
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
        <KittenImg className="block shrink-0 max-lg:self-center max-lg:w-full" />
      </div>
      <Footer />
    </>
  );
};

export default ErrorBoundary;
