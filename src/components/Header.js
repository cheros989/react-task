import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
text-decoration: none;
padding: 20px;
color: gray;
:hover {
  text-decoration: none;
}
`
const StyledNav = styled(Nav)`
padding: 15px;
`

export default class Header extends Component {
  logout() {
    this.props.authenticate(null)
  }
  render() {
    return (
      <nav>
        <div>
            <Navbar color="light" light expand="md">
                <StyledNav navbar>
                  <NavItem>
                    <StyledLink to="/">Home</StyledLink>
                  </NavItem>
                  {this.props.currentUser !== null ?
                    <NavItem>
                      <StyledLink to="/login" onClick={this.logout}>Logout</StyledLink>
                    </NavItem> :
                    <NavItem>
                      <StyledLink to="/login">Login</StyledLink>
                    </NavItem> 
                  }
                  {this.props.currentUser !== null ?
                      <NavItem>
                        <StyledLink to="/profile">Profile</StyledLink>
                      </NavItem> :
                      null
                  }
                </StyledNav>
            </Navbar>
          </div>
      </nav>
    )
  }
}