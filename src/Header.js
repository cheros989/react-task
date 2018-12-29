import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => (
  <nav>
    <div>
        <Navbar color="light" light expand="md">
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
  </nav>
)

export default Header;