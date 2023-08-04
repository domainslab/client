import { ReactComponent as MagicIcon } from 'assets/icons/magic.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import { isTouchDevice } from 'utils/isTouchDevice';
import { useMemo } from 'react';
import Select from 'components/Select';

const Search: React.FC = () => {
  const isTouchScreen = useMemo(isTouchDevice, []);

  return (
    <div className="flex flex-col gap-[15px]">
      <h2 className="text-[1.625rem] font-bold">
        Describe your project and come up with suitable domains
      </h2>
      <div className="flex flex-col gap-[25px] rounded-[30px] p-[25px] bg-LightBg1 border-2 border-StrokeColor">
        <search className="flex gap-[15px]">
          <Input
            {...{
              placeholder: 'a task management app for adhd students',
            }}
          />
          <Button
            {...{
              className: `flex gap-[10px] justify-center items-center`,
            }}
          >
            Generate <MagicIcon className="w-[18px] h-[18px]" />
          </Button>
        </search>
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[20px] items-center">
            <h3 className="text-[1.25rem]">Top-level domains</h3>
            <div className="text-[0.75rem] text-TransparentText">
              {isTouchScreen ? 'Tap' : 'Click'} to select
            </div>
          </div>
          <Select />
        </div>
      </div>
    </div>
  );
};

export default Search;
