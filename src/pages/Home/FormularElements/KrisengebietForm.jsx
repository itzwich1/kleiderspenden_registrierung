import React, { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import ukraine from "../../../images/Krisengebiet/Ukraine.png";
import suedsudan from "../../../images/Krisengebiet/Suedsudan.png";
import afgahnistan from "../../../images/Krisengebiet/Afgahnistan.png";
import sudan from "../../../images/Krisengebiet/Sudan.png";
import mali from "../../../images/Krisengebiet/Mali.png";
import somalia from "../../../images/Krisengebiet/Somalia.png";
//import ukraine from "../../../images/Krisengebiet/"

export default function KrisengebietForm({ selectedRegion, onOptionChange }) {

  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Bitte wählen Sie ein Land in d as Ihre Kleiderspende gehen soll.</h3>
      <Container>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <input
              type="radio"
              id="ukraine"
              value="Ukraine"
              name="krisengebiet"
              checked={selectedRegion === "Ukraine"}
              onChange={(event) => onOptionChange(event.target.value)}
            />
             {" "}
            <label htmlFor="ukraine">
              <Image src={ukraine} fluid={true} alt="Ukraine" />
            </label>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="d-flex justify-content-center">
            <input
              type="radio"
              id="somalia"
              value="Somalia"
              name="krisengebiet"
              checked={selectedRegion === "Somalia"}
              onChange={(event) => onOptionChange(event.target.value)}
            />
             {" "}
            <label htmlFor="somalia">
              <Image src={somalia} fluid={true} alt="Somalia" />
            </label>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="d-flex justify-content-center">
            <input
              type="radio"
              id="mali"
              value="Mali"
              name="krisengebiet"
              checked={selectedRegion === "Mali"}
              onChange={(event) => onOptionChange(event.target.value)}
            />
             {" "}
            <label htmlFor="mali">
              <Image src={mali} fluid={true} alt="Mali" />
            </label>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="d-flex justify-content-center">
            <input
              type="radio"
              id="suedsudan"
              value="Suedsudan"
              name="krisengebiet"
              checked={selectedRegion === "Suedsudan"}
              onChange={(event) => onOptionChange(event.target.value)}
            />
             {" "}
            <label htmlFor="suedsudan">
              <Image src={suedsudan} fluid={true} alt="Suedsudan" />
            </label>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="d-flex justify-content-center">
            <input
              type="radio"
              id="sudan"
              value="Sudan"
              name="krisengebiet"
              checked={selectedRegion === "Sudan"}
              onChange={(event) => onOptionChange(event.target.value)}
            />
             {" "}
            <label htmlFor="sudan">
              <Image src={sudan} fluid={true} alt="Sudan" />
            </label>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="d-flex justify-content-center">
            <input
              type="radio"
              id="afgahnistan"
              value="Afgahnistan"
              name="krisengebiet"
              checked={selectedRegion === "Afgahnistan"}
              onChange={(event) => onOptionChange(event.target.value)}
            />
             {" "}
            <label htmlFor="afgahnistan">
              <Image src={afgahnistan} fluid={true} alt="Afgahnistan" />
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
