import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./Header.css"

class Header extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/ueberuns">Über uns</Link></li>
          <li><Link to="/unseregeschichte">Unsere Geschichte</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
