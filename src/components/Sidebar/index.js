import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Delicious Veggies</SidebarLink>
        <SidebarLink to='/'>Meat Delights</SidebarLink>
        <SidebarLink to='/'>Full Meals</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
