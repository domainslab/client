import { twMerge } from 'tailwind-merge';
import { ReactComponent as ArrowMoreIcon } from 'assets/icons/arrow-more.svg';
import { ReactComponent as GoDaddyLogoSmall } from 'assets/images/godaddy-logo-small.svg';
import { getGoDaddyDomainURL } from 'utils/getGoDaddyDomainURL';

type ProviderButtonProps = {
  domain: string;
  classNames?: string;
};

const ProviderButton: React.FC<ProviderButtonProps> = ({ domain, classNames = '' }) => (
  <a
    {...{
      href: getGoDaddyDomainURL(domain),
      target: '_blank',
      className: twMerge(
        'block bg-LightBg2 w-[280px] py-[10px] px-[15px] flex items-center gap-[10px] border-[2px] border-StrokeColor rounded-[12px] max-sm:w-full',
        classNames
      ),
    }}
  >
    <GoDaddyLogoSmall />
    <div className="flex-1 max-sm:text-[1rem]">GoDaddy</div>
    <ArrowMoreIcon className="block w-[22px] h-[22px] text-Secondary" />
  </a>
);

export default ProviderButton;
