import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function KrisengebietForm() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <input
              type="radio"
              id="ukraine"
              value="Ukraine"
              name="krisengebiet"
            />
              <label for="ukraine">Ukraine</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              type="radio"
              id="somalia"
              value="Somalia"
              name="krisengebiet"
            />
              <label for="somalia">Somalia</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="radio" id="mali" value="Mali" name="krisengebiet" /> {" "}
            <label for="mali">Mali</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="radio" id="suedsudan" value="Suedsudan" name="krisengebiet" /> {" "}
            <label for="suedsudan">Südsudan</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="radio" id="sudan" value="Sudan" name="krisengebiet" /> {" "}
            <label for="sudan">Sudan</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="radio" id="afgahnistan" value="Afgahnistan" name="krisengebiet" /> {" "}
            <label for="afgahnistan">Afgahnistan</label>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
