import { ReactComponent as ArrowExtendIcon } from 'assets/icons/arrow-extend.svg';
import Button from 'components/Button';

const Select: React.FC = () => {
  const items = ['.com', '.ai', '.io', '.org', '.ru'];
  const selected = '.com';
  return (
    <div className="flex gap-[20px]">
      <div className="flex gap-[10px]">
        {items.map(item => (
          <div
            {...{
              className: `cursor-pointer py-[7px] px-[20px] rounded-[100px] bg-LightBg2 font-bold text-[1rem] hover:border-2 hover:border-AccentLight hover:py-[5px] hover:px-[18px] ${
                item === selected &&
                'cursor-default bg-Accent hover:border-none hover:py-[7px] hover:px-[20px]'
              }`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="flex gap-[7px] items-center text-[1rem]">
        More <ArrowExtendIcon className="w-[18px] h-[18px]" />
      </button>
    </div>
  );
};

export default Select;
