import NavItem from './components/NavItem';

type HeaderProps = {
  active?: string;
};

const Header: React.FC<HeaderProps> = ({ active }) => (
  <header className="h-[102px] p-[40px] flex justify-between text-base">
    <h1>domains.ai</h1>
    <nav className="flex gap-[40px]">
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
