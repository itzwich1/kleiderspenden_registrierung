import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap"; // Importiere React Bootstrap Komponenten
import logo from "../../images/KleiderHeld_klein.png"; // Dein Logo importieren
import "./Header.css"; // Falls du CSS weiter verwenden möchtest

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        {/* Logo als Link zur Startseite */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="KleiderHeld Logo"
            style={{ height: "40px", objectFit: "cover" }}
          />
        </Navbar.Brand>

        {/* Hamburger-Menü für mobile Ansicht */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler"/>

        {/* Die Navigationslinks */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/ueberuns">
              Über uns
            </Nav.Link>
            <Nav.Link as={NavLink} to="/unseregeschichte">
              Unsere Geschichte
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
