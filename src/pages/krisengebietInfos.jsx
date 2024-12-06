import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import somalia from "../images/Krisengebiet/somalia.jpg";
import ukraine from "../images/Krisengebiet/Ukraine.jpg";
import mali from "../images/Krisengebiet/mali.jpg";
import sudan from "../images/Krisengebiet/Sudan.jpg";
import suedsudan from "../images/Krisengebiet/Suedsudan.jpg";
import afgahnistan from "../images/Krisengebiet/Afgahnistan.jpg";
import "./krisengebietInfos.css";

export default function KrisengebietInfos () {
  // Daten für die Beiträge
  const beitragDaten = [
    {
      bild: ukraine, // Beispielbild
      überschrift: "Ukraine",
      text: "Erfahren Sie mehr über die Lage und wie Ihre Hilfe hier den Menschen zugutekommen kann.",
    },
    {
      bild: somalia,
      überschrift: "Somalia",
      text: "Ein Gebiet, das von Naturkatastrophen schwer getroffen wurde. Ihre Spenden machen den Unterschied.",
    },
    {
      bild: sudan,
      überschrift: "Sudan",
      text: "Konflikte haben viele vertrieben – Ihre Unterstützung bringt dringend benötigte Hilfe.",
    },
    {
      bild: suedsudan,
      überschrift: "Südsudan",
      text: "Menschen kämpfen täglich ums Überleben. Gemeinsam können wir helfen.",
    },
    {
      bild: mali,
      überschrift: "Mali",
      text: "Ihre Spende sorgt für Wärme und Würde in dieser Region.",
    },
    {
      bild: afgahnistan,
      überschrift: "Afgahnistan",
      text: "Lernen Sie die Herausforderungen dieses Gebiets kennen und wie wir sie bewältigen können.",
    },
  ];

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        {beitragDaten.map((beitrag, index) => (
          <Col xs={12} md={8} lg={6} className="mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={beitrag.bild} alt={`Bild für ${beitrag.überschrift}` } className="fixed-image"/>
              <Card.Body>
                <Card.Title>{beitrag.überschrift}</Card.Title>
                <Card.Text>{beitrag.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

