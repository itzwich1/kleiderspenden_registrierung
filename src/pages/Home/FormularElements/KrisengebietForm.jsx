import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import ukraine from "../../../images/krisengebiet/ukraine.PNG";
//import ukraine from "../../../images/Krisengebiet/"

export default function KrisengebietForm() {
  return (
    <div class="d-flex flex-column align-items-center">
      <h3>Bitte wählen Sie ein Land in das Ihre Kleiderspende gehen soll.</h3>
      <Container>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <input
              type="radio"
              id="ukraine"
              value="Ukraine"
              name="krisengebiet"
            />
              <label for="ukraine">Ukraine</label>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <input
              type="radio"
              id="somalia"
              value="Somalia"
              name="krisengebiet"
            />
              <label for="somalia">Somalia</label>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <input type="radio" id="mali" value="Mali" name="krisengebiet" /> {" "}
            <label for="mali">Mali</label>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <input
              type="radio"
              id="suedsudan"
              value="Suedsudan"
              name="krisengebiet"
            />
              <label for="suedsudan">Südsudan</label>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <input type="radio" id="sudan" value="Sudan" name="krisengebiet" /> {" "}
            <label for="sudan">Sudan</label>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <input
              type="radio"
              id="afgahnistan"
              value="Afgahnistan"
              name="krisengebiet"
            />
              <label for="afgahnistan">Afgahnistan</label>
          </Col>
        </Row>
      </Container>
      <label class="radio-container">
            <input type="radio" name="option" value="1"/>
            <img src="https://via.placeholder.com/100" alt="Option 1"/>
            <Image src={ukraine} alt="Logo" fluid={true} />
        </label>
    </div>
  );
}
