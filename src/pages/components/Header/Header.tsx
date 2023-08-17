import NavItem from './components/NavItem';

type HeaderProps = {
  active?: string;
};

const Header: React.FC<HeaderProps> = ({ active }) => (
  <header className="h-[102px] p-[40px] flex justify-between text-base max-sm:px-[20px]">
    <h1 className="text-Secondary text-[1rem] weight-bold tracking-[0.03rem]">domainslab.ai</h1>
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
        isActive={active === 'contacts'}
        to="/contacts"
      >
        Contacts
      </NavItem>
      <NavItem
        isActive={active === 'contribute'}
        to="/contribute"
      >
        Contribute
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
