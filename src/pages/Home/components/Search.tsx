import { ReactComponent as MagicIcon } from 'assets/icons/magic.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import { isTouchDevice } from 'utils/isTouchDevice';
import { useEffect, useMemo, useRef, useState } from 'react';
import ChipsSelect from 'components/ChipsSelect';
import Card from 'components/Card/Card';
import { getRandomInt } from 'utils/getRandomInt';

const DEFAULT_TLDS = ['.com', '.ai', '.io', '.org', '.ru', '.shop', '.net'];

const target = 'a task management app for adhd students';
const typingSpeed = 90;
const blinkingSpeed = 480;

const Search: React.FC = () => {
  const [selectedTLDs, setSelectedTLDs] = useState<string[]>([]);

  const typingRef = useRef<number>(0);

  const onChipsSelectChange = (items: string[]) => {
    setSelectedTLDs([...items]);
  };

  const type = () => {
    if (typingRef.current > target.length) {
      blink();
      return;
    }

    const inputEl = document.getElementById('search-input') as HTMLInputElement;
    if (!inputEl) {
      return;
    }

    inputEl.placeholder = inputEl.placeholder.replace('|', '');
    inputEl.placeholder += target.charAt(typingRef.current) + '|';

    typingRef.current += 1;
    setTimeout(type, typingSpeed + getRandomInt(10));
  };

  const blink = () => {
    const inputEl = document.getElementById('search-input') as HTMLInputElement;
    if (!inputEl) {
      return;
    }

    if (inputEl.placeholder.charAt(inputEl.placeholder.length - 1) === '|') {
      inputEl.placeholder = inputEl.placeholder.replace('|', '');
      setTimeout(blink, blinkingSpeed);
      return;
    }

    inputEl.placeholder += '|';
    setTimeout(blink, blinkingSpeed);
    return;
  };

  const isTouchScreen = useMemo(isTouchDevice, []);

  useEffect(() => {
    type();
  }, []);

  return (
    <div className="flex flex-col gap-[15px]">
      <h2 className="text-[1.625rem] font-bold">
        Describe your project and come up with suitable domains
      </h2>
      <Card classNames="flex flex-col gap-[25px] p-[25px]">
        <div className="flex gap-[15px]">
          <Input
            {...{
              id: 'search-input',
              // placeholder: 'a task management app for adhd students',
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
