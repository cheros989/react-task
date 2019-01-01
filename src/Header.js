import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
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
  }
}