import Header from 'pages/components/Header';
import Heading from './components/Heading';
import Search from './components/Search';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header active="" />
      <div className="max-w-[1000px] mt-[20px] mb-0 mx-auto flex flex-col gap-[50px]">
        <Heading />
        <Search />
      </div>
    </div>
  );
};

export default HomePage;
