import Card from 'components/Card';

import Status from './components/Status';
import type { StatusT } from 'components/Card/types';
import ProviderButton from './components/ProviderButton';

export type DomainCardProps = {
  title: string;
  isLoading: boolean;
  isAvailable: boolean;
};

const borderColors: Record<StatusT, string> = {
  Loading: 'border-AccentLight',
  Available: 'border-SuccessBg',
  'Not Available': 'border-WarningBg',
};

const DomainCard: React.FC<DomainCardProps> = ({ title, isAvailable, isLoading }) => {
  const status: StatusT = (isLoading && 'Loading') || (isAvailable ? 'Available' : 'Not Available');

  return (
    <Card
      classNames={`flex flex-row justify-between items-center gap-x-[20px] gap-y-[15px] ${borderColors[status]} max-sm:p-[15px] max-md:flex-col max-md:items-start`}
    >
      <div className="flex gap-x-[20px] gap-y-[7px] items-center flex-wrap max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-[7px]">
        <p className="text-[1.375rem] font-semibold max-sm:text-[1.25rem]">{title}</p>
        <Status status={status} />
      </div>
      <ProviderButton
        domain={title}
        classNames="shrink-0 w-full md:w-[280px]"
      />
    </Card>
  );
};

export default DomainCard;
