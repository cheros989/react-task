import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div>
            <Navbar color="light" light expand="md">
                <Nav navbar>
                  <NavItem>
                    <NavLink><Link to="/">Home</Link></NavLink>
                  </NavItem>
                  {this.props.isAuthenticated ?
                    <NavItem>
                      <NavLink><Link to="/logout">Logout</Link></NavLink>
                    </NavItem> :
                    <NavItem>
                      <NavLink><Link to="/login">Login</Link></NavLink>
                    </NavItem> 
                  }
                </Nav>
            </Navbar>
          </div>
      </nav>
    )
  }
}