import { ReactComponent as ArrowExtendIcon } from 'assets/icons/arrow-extend.svg';
import { useMemo, useState } from 'react';

type ChipsSelectProps = {
  items: string[];
  selected?: string[];
  limit?: number;
  onChange?: (items: string[]) => void;
};

const ChipsSelect: React.FC<ChipsSelectProps> = ({ items, selected, limit, onChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onItemClick = (item: string) => () => {
    const itemIndex = selected?.indexOf(item) ?? -1;
    if (itemIndex > -1) {
      const newSelected = selected ?? [];
      newSelected.splice(itemIndex, 1);

      onChange && onChange(newSelected);
      return;
    }

    onChange && onChange([...(selected ?? []), item]);
  };

  const triggerExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const itemsToRender = useMemo(() => {
    if (isExpanded || !limit) {
      return items;
    }

    return items.slice(0, limit);
  }, [isExpanded, items, limit]);

  return (
    <div className={`flex gap-[20px] ${isExpanded ? 'flex-col' : ''}`}>
      <div className="flex flex-wrap gap-[10px]">
        {itemsToRender.map(item => (
          <div
            {...{
              onClick: onItemClick(item),
              tabIndex: 0,
              className: `cursor-pointer py-[7px] px-[20px] rounded-[100px] bg-LightBg2 font-bold text-[1rem] hover:border-2 hover:border-AccentLight hover:py-[5px] hover:px-[18px] ${
                selected?.includes(item)
                  ? 'cursor-default !bg-Accent hover:border-none hover:py-[7px] hover:px-[20px]'
                  : ''
              }`,
            }}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        onClick={triggerExpanded}
        className="flex gap-[7px] items-center text-[1rem] hover:text-AccentLight"
      >
        {isExpanded ? 'Less' : 'More'} <ArrowExtendIcon className="w-[18px] h-[18px]" />
      </button>
    </div>
  );
};

export default ChipsSelect;
