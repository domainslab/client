import { NavLink, NavLinkProps } from 'react-router-dom';

type NavItemProps = {
  isActive?: boolean;
};

const NavItem: React.FC<NavItemProps & NavLinkProps & React.RefAttributes<HTMLAnchorElement>> = ({
  isActive,
  ...props
}) => (
  <NavLink
    {...{
      className: `text-TransparentText transition-colors transition-colors ease-in-out delay-75 hover:text-Secondary font-bold ${
        isActive && `!text-Secondary`
      }`,
      ...props,
    }}
  >
    {props.children}
  </NavLink>
);

export default NavItem;
