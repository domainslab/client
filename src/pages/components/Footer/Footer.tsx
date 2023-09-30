import Separator from 'components/Separator/Separator';
import { ReactComponent as PointIcon } from 'assets/icons/point.svg';
import NavItem from 'components/NavItem';
// import { ReactComponent as GithubIcon } from 'assets/icons/github.svg';
// import Colors from 'assets/colors/colors';

const Footer: React.FC = () => (
  <footer className="mt-[60px] px-[20px] sm:px-[40px] md:px-[50px] max-sm:mt-[30px]">
    <Separator />
    <div className="py-[30px] flex justify-between text-base items-center text-TransparentText font-bold max-sm:flex-col max-sm:items-start max-sm:gap-[10px]">
      <ul className="list-none flex flex-row items-center gap-[20px]">
        <li>
          <NavItem to="/terms">Terms&Conditions</NavItem>
        </li>
        <PointIcon className="block w-[12px] h-[12px]" />
        <li>
          <NavItem to="/policy">Policy</NavItem>
        </li>
{/*         <PointIcon className="block w-[12px] h-[12px]" />
        <li>
          <NavItem to="https://github.com/domainslab/client" className="flex flex-row items-center gap-2">
            Contribute
            <GithubIcon fill={Colors.TransparentText} />
          </NavItem>
        </li> */}
      </ul>
      <div className="text-Secondary font-bold tracking-[0.03rem] select-none">domainslab.ai</div>
    </div>
  </footer>
);

export default Footer;
