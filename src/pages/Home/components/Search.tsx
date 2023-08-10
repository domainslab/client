import { ReactComponent as MagicIcon } from 'assets/icons/magic.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import { isTouchDevice } from 'utils/isTouchDevice';
import { useMemo, useRef, useState } from 'react';
import ChipsSelect from 'components/ChipsSelect';
import Card from 'components/Card/Card';
import { usePlaceholderTypingEffect } from 'hooks/usePlaceholderTypingEffect';
import { useViewportDimensions } from 'hooks/useViewportDimensions';

const DEFAULT_TLDS = ['.com', '.ai', '.io', '.org', '.ru', '.shop', '.net'];

const PLACEHOLDERS = [
  'a task management app for adhd students',
  'a meal planning app that combines nutrition and time management',
  'an educational app that takes students on virtual time-travel journeys',
  'an IoT-based gardening system for urban dwellers',
  'a platform where book enthusiasts can connect',
  'a supportive app that allows parents to prioritize their mental well-being',
  'a financial management tool tailored to freelancers and gig workers',
  'an app that helps eco-conscious shoppers discover stylish clothing',
  "an AI-powered fitness app that adapts and guides users' routines",
];

const generateButtonClassNames = 'flex gap-[10px] justify-center items-center';

const Search: React.FC = () => {
  const [selectedTLDs, setSelectedTLDs] = useState<string[]>([]);

  const [windowWidth] = useViewportDimensions();

  // FIXME later
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputRef = useRef<any>(null);

  const onChipsSelectChange = (items: string[]) => {
    setSelectedTLDs([...items]);
  };

  usePlaceholderTypingEffect(inputRef, PLACEHOLDERS);

  const isTouchScreen = useMemo(isTouchDevice, []);

  return (
    <div className="flex flex-col gap-[15px]">
      <h2 className="text-[1.625rem] font-bold max-sm:text-[1.25rem]">
        Describe your project and come up with suitable domains
      </h2>
      <Card classNames="flex flex-col gap-[25px] p-[25px] rounded-[30px] max-sm:p-[15px]">
        <div className="flex gap-[15px]">
          <Input
            {...{
              isTextarea: windowWidth < 786,
              ref: inputRef,
            }}
          />
          <Button
            {...{
              className: `${generateButtonClassNames} max-sm:hidden`,
            }}
          >
            Generate <MagicIcon className="w-[18px] h-[18px]" />
          </Button>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[20px] items-center">
            <h3 className="text-[1.25rem] max-sm:text-[1rem]">Top-level domains</h3>
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
        <Button
          {...{
            className: `hidden ${generateButtonClassNames} max-sm:flex max-sm:py-[15px] max-sm:text-[1.125rem] max-sm:leading-none`,
          }}
        >
          Generate <MagicIcon className="w-[18px] h-[18px]" />
        </Button>
      </Card>
    </div>
  );
};

export default Search;
