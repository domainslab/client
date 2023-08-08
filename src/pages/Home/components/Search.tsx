import { ReactComponent as MagicIcon } from 'assets/icons/magic.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import { isTouchDevice } from 'utils/isTouchDevice';
import { useMemo, useRef, useState } from 'react';
import ChipsSelect from 'components/ChipsSelect';
import Card from 'components/Card/Card';
import { usePlaceholderTypingEffect } from 'hooks/usePlaceholderTypingEffect';

const DEFAULT_TLDS = ['.com', '.ai', '.io', '.org', '.ru', '.shop', '.net'];

const Search: React.FC = () => {
  const [selectedTLDs, setSelectedTLDs] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const onChipsSelectChange = (items: string[]) => {
    setSelectedTLDs([...items]);
  };

  usePlaceholderTypingEffect(inputRef, [
    'a task management app for adhd students',
    'a meal planning app that combines nutrition and time management',
    'an educational app that takes students on virtual time-travel journeys',
    'an IoT-based gardening system for urban dwellers',
    'a platform where book enthusiasts can connect',
    'a supportive app that allows parents to prioritize their mental well-being',
    'a financial management tool tailored to freelancers and gig workers',
    'an app that helps eco-conscious shoppers discover stylish clothing',
    "an AI-powered fitness app that adapts and guides users' routines",
  ]);

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
              ref: inputRef,
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
            limit={5}
            onChange={onChipsSelectChange}
          />
        </div>
      </Card>
    </div>
  );
};

export default Search;
