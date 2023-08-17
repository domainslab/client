import { ReactComponent as SuccessIcon } from 'assets/icons/success.svg';
import { ReactComponent as NotAvailableIcon } from 'assets/icons/not-available.svg';
import { ReactComponent as PreloaderIcon } from 'assets/icons/preloader.svg';

import type { StatusT } from 'components/Card/types';

const classNames: Record<StatusT, string> = {
  Loading: 'text-AccentColorText bg-AccentLight',
  Available: 'text-SuccessText bg-SuccessBg',
  'Not Available': 'text-WarningText bg-WarningBg',
};

const icons: Record<StatusT, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Loading: PreloaderIcon,
  Available: SuccessIcon,
  'Not Available': NotAvailableIcon,
};

const Status: React.FC<{ status: StatusT }> = ({ status }) => {
  const IconComponent = icons[status];

  return (
    <div
      className={`flex flex-row items-center py-[5px] px-[10px] gap-[5px] rounded-[100px] font-bold leading-normal ${classNames[status]}`}
    >
      <IconComponent
        width="14px"
        height="14px"
        className={status === 'Loading' ? 'animate-spin' : ''}
      />
      <div className="text-[0.75rem]">{status}</div>
    </div>
  );
};

export default Status;
