import React, { Component } from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="fixedFooter py-1">
        <Container>
        <Row className="text-center">
          <Col>
            <p>© 2024 KleiderHeld. Alle Rechte vorbehalten.</p>
          </Col>
        </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
