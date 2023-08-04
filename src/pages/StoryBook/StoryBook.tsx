import Header from 'pages/components/Header';
import Colors from './components/Colors';
import Icons from './components/Icons';

const StoryBook: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-[30px] text-MainText">
        <h1 className="text-3xl">Storybook</h1>
        <Icons />
        <Colors />
      </div>
    </>
  );
};

export default StoryBook;
