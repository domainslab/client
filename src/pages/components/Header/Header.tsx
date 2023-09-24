import { Link } from 'react-router-dom';

import NavItem from 'components/NavItem/NavItem';

type HeaderProps = {
  active?: string;
};

const Header: React.FC<HeaderProps> = ({ active }) => (
  <header className="h-[102px] p-[40px] flex justify-between text-base max-sm:px-[20px]">
    <Link to="/">
      <h1 className="text-Secondary text-[1rem] font-bold tracking-[0.03rem] select-none">
        domainslab.ai
      </h1>
    </Link>
    <nav className="flex gap-[40px] max-sm:hidden">
      <NavItem
        isActive={active === ''}
        to="/"
      >
        Home
      </NavItem>
      <NavItem
        isActive={active === 'about'}
        to="/about"
      >
        About
      </NavItem>
      <NavItem
        isActive={active === 'developers'}
        to="/developers"
      >
        API
      </NavItem>
    </nav>
  </header>
);

export default Header;
