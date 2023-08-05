import { ReactComponent as SuccessIcon } from 'assets/icons/success.svg';
import { ReactComponent as NotAvailableIcon } from 'assets/icons/not-available.svg';
import { ReactComponent as PreloaderIcon } from 'assets/icons/preloader.svg';

import type { StatusT } from 'components/Card/types'

const classNames: Record<StatusT, string> = {
  'Loading': 'text-AccentColorText bg-AccentLight',
  'Available': 'text-SuccessText bg-SuccessBg',
  'Not Available': 'text-WarningText bg-WarningBg',
}

const icons: Record<StatusT, React.FC<React.SVGProps<SVGSVGElement>>> = {
  'Loading': PreloaderIcon,
  'Available': SuccessIcon,
  'Not Available': NotAvailableIcon,
}

const Status: React.FC<{ status: StatusT, }> = ({
  status,
}) => {
  const IconComponent = icons[status]

  return (
    <div className={`flex flex-row items-center py-[7px] px-[15px] gap-[7px] rounded-full font-bold ${classNames[status]}`}>
      <IconComponent width='18px' height='18px' />
      <div className="hidden md:block">{status}</div>
    </div>
  )
}

export default Status