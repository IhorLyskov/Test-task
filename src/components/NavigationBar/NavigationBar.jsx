import { Menu, Nav, NavLinkHeader, BoyImg } from './NavigationBar.styled';

import boyImage from '../../images/Boy.png';

const NavigationBar = () => {
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

export default NavigationBar;
