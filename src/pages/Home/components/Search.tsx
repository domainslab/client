import { ReactComponent as MagicIcon } from 'assets/icons/magic.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import { isTouchDevice } from 'utils/isTouchDevice';
import { useMemo, useState } from 'react';
import ChipsSelect from 'components/ChipsSelect';
import Card from 'components/Card/Card';

const DEFAULT_TLDS = ['.com', '.ai', '.io', '.org', '.ru'];

const Search: React.FC = () => {
  const [selectedTLDs, setSelectedTLDs] = useState<string[]>([]);

  const onChipsSelectChange = (items: string[]) => {
    setSelectedTLDs([...items]);
  };

  const isTouchScreen = useMemo(isTouchDevice, []);

  return (
    <div className="flex flex-col gap-[15px]">
      <h2 className="text-[1.625rem] font-bold">
        Describe your project and come up with suitable domains
      </h2>
      <Card classNames="flex flex-col gap-[25px] p-[25px]">
        <div className="flex gap-[15px]">
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
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[20px] items-center">
            <h3 className="text-[1.25rem]">Top-level domains</h3>
            <div className="text-[0.75rem] text-TransparentText">
              {isTouchScreen ? 'Tap' : 'Click'} to select
            </div>
          </div>
          <ChipsSelect
            items={DEFAULT_TLDS}
            selected={selectedTLDs}
            onChange={onChipsSelectChange}
          />
        </div>
      </Card>
    </div>
  );
};

export default Search;
