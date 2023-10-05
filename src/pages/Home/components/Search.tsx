import { ReactComponent as MagicIcon } from 'assets/icons/magic.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import { isTouchDevice } from 'utils/isTouchDevice';
import {  useMemo, useRef, useState } from 'react';
import ChipsSelect from 'components/ChipsSelect';
import Card from 'components/Card/Card';
import { usePlaceholderTypingEffect } from 'hooks/usePlaceholderTypingEffect';
import { useViewportDimensions } from 'hooks/useViewportDimensions';
import { useDomainContext } from '../../../contexts/DomainContext/DomainContext';
import { apiRequest } from '../../../services/api/RequestDomains';

const DEFAULT_TLDS = [
  '.com',
  '.ai',
  '.io',
  '.dev',
  '.gg',
  '.tech',
  '.cloud',
  '.codes',
  '.edu',
  '.app',
  '.wiki',
  '.net',
  '.online',
  '.pro',
  '.one',
  '.us',
  '.me',
  '.org',
  '.travel',
  '.store',
  '.shop',
  '.market',
  '.team',
  '.studio',
  '.design',
  '.school',
  '.health',
  '.agency',
  '.space',
  '.guide',
  '.earth',
  '.coffee',
  '.beauty',
  '.art',
  '.news',
  '.club',
  '.life',
  '.live',
  '.chat',
  '.cash',
  '.tools',
  '.city',
];

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
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);

  const {setDomains,domains, setLoading, setLastPrompt, setLastTlds, lastPrompt, lastTlds} = useDomainContext()

  // TODO: FIXME later
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputRef = useRef<any>(null);

  const [windowWidth] = useViewportDimensions();

  usePlaceholderTypingEffect(inputRef, PLACEHOLDERS);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputError(false);
    setInputValue(e.target.value);
  };

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };

  const onButtonClick = () => {
    if (inputValue.trim().length === 0) {
      setInputError(true);
      return;
    }
    setLoading(true)
    setLastPrompt(inputRef.current.value)
    setLastTlds(selectedTLDs)
    console.log(lastPrompt, lastTlds)
    apiRequest( inputRef.current.value, selectedTLDs )
      .then(res => {setDomains(res.data.domains)
      console.log(domains)})
      .catch(console.error)
      .finally(()=>{

        setLoading(false) })
  };

  const onChipsSelectChange = (items: string[]) => {
    setSelectedTLDs([...items]);
  };

  const isTouchScreen = useMemo(isTouchDevice, []);

  return (
    <div className="flex flex-col gap-[20px]">
      <h2 className="text-[1.625rem] font-bold max-sm:text-[1.25rem]">
        Describe your project and come up with suitable domains
      </h2>
      <Card classNames="flex bg-LightBg1 flex-col gap-[25px] p-[25px] rounded-[30px] max-sm:p-[15px] backdrop-blur-[2.5px] shadow-SearchCard">
        <div className="flex gap-[15px]">
          <Input
            {...{
              className: windowWidth < 640 ? 'min-h-[85px] leading-[1.25rem] text-[1rem]' : '',
              isTextarea: windowWidth < 640,
              ref: inputRef,
              value: inputValue,
              error: inputError,
              onChange: onInputChange,
              onKeyDown: onInputKeyDown,
            }}
          />
          <Button
            {...{
              className: `${generateButtonClassNames} max-sm:hidden`,
              onClick: onButtonClick,
            }}
          >
            Generate <MagicIcon className="w-[18px] h-[18px]" />
          </Button>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[20px] items-center max-[300px]:flex-col max-[300px]:items-start max-[300px]:gap-[0px]">
            <h3 className="text-[1.25rem] font-bold max-sm:text-[1rem]">Top-level domains</h3>
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
            onClick: onButtonClick,
          }}
        >
          Generate <MagicIcon className="w-[18px] h-[18px]" />
        </Button>
      </Card>
    </div>
  );
};

export default Search;
