import Separator from 'components/Separator/Separator';
import { ReactComponent as PointIcon } from 'assets/icons/point.svg';

const Footer: React.FC = () => (
  <footer className="mt-[60px] px-[20px] sm:px-[40px] md:px-[50px] max-sm:mt-[30px]">
    <Separator />
    <div className="py-[30px] flex justify-between text-base items-center opacity-50 font-bold">
      <div>
        <ul className="list-none flex flex-row items-center gap-[20px]">
          <li>
            <a>Terms&Conditions</a>
          </li>
          <PointIcon className="block w-[12px] h-[12px]" />
          <li>
            <a>Policy</a>
          </li>
        </ul>
      </div>
      <div className="text-Secondary font-bold tracking-[0.03rem] select-none">domainslab.ai</div>
    </div>
  </footer>
);

export default Footer;
