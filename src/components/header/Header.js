import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Adidas Assist</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              Products
            </NavItem>
            <NavItem eventKey={3} href="#">
              Blog
            </NavItem>
          </Nav>
          <Nav pullRight>
          <NavDropdown eventKey={1} title="Account" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Settings</MenuItem>
              <MenuItem eventKey={1.2}>Shopping Cart</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1.3}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;