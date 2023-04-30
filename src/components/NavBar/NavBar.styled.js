import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 12px;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: start;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  color: white;
`;

export const NavLinkHeader = styled(NavLink)`
  display: block;
  padding: 4px;
  margin-left: 20px;
  color: #ebd8ff;
  &.active {
    color: #5cd3a8;
  }
  &:hover {
    color: #e5bf54;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  font-size: 28px;
`;

export const BoyImg = styled.div``;
