import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Fresh Meal Plans</NavLink>
        <NavIcon onClick={toggle}>
          <p>Meals</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
