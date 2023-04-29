import { Menu, Nav, NavLinkHeader, BoyImg } from './NavBar.styled';

import boyImage from '../../images/Boy.png';

export const NavBar = () => {
  return (
    <Nav>
      <Menu>
        <BoyImg>
          <img src={boyImage} alt="logo" />
        </BoyImg>
        <NavLinkHeader to="/">Home</NavLinkHeader>
        <NavLinkHeader to="/tweets">Tweets</NavLinkHeader>
      </Menu>
    </Nav>
  );
};
