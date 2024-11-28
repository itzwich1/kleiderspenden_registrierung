import React, { Component, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen, // Zustand aendern
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav>
        <Link to="/" className="siteHeader">
          KleiderHeld
        </Link>
        <div className="mobileManu" onClick={this.toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={isMenuOpen ? "open" : "closed"}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ueberuns">Über uns</NavLink>
          </li>
          <li>
            <NavLink to="/unseregeschichte">Unsere Geschichte</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
