import React, { Component } from 'react';
import { pepperLogo } from '../../assets/images';
import css from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';
import { Nav, Navbar as NavbarC } from 'react-bootstrap';
export default class Navbar extends Component {
  render() {
    const { staticNavLinks } = this.props;
    return (
      <NavbarC
        sticky="top"
        expand="md"
        className={`${css.navbarOverride} px-5 mb-4`}
      >
        <NavbarC.Brand>
          <Link className="navbar-brand" to="/">
            <img
              src={pepperLogo}
              style={{ width: '150px' }}
              alt="Pepper Logo"
            />
          </Link>
        </NavbarC.Brand>
        <NavbarC.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarC.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav mr-auto navlinks">
            {staticNavLinks.map((navLink, key) => {
              return (
                <li key={key} className={`nav-item ${css.navLinkContainer}`}>
                  <NavLink
                    className={css.navLink}
                    to={navLink.path}
                    activeClassName={css.navLinkActive}
                    exact
                  >
                    {navLink.name}
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </NavbarC.Collapse>
      </NavbarC>
    );
  }
}
