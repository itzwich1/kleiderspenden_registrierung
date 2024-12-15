import React, {  } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../images/KleiderHeld_mit_Schriftzug.png";
import { useNavigate } from "react-router-dom";

//import {StyleSheet, Button, View, Text, Alert} from 'react-native';

export default function Home() {
  const navigate = useNavigate();

  const forwardToRegistrationForm = () => {
    navigate("/RegisterForm");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="flex-grow-1 py-4">
        <Row className="text-center flex-grow-1">
          <Col>
            <Image src={logo} alt="Logo" fluid={true} />
          </Col>
        </Row>
        <Row className="text-center flex-grow-1">
          <Col>
            <p>
              Mit KleiderHeld kannst du zum wahren Superhelden des Alltags
              werden. Indem du dich für diejenigen einsetzt, die es am
              dringendsten brauchen, hilfst du, das Leben von Menschen in
              Krisengebieten ein Stück weit zu verbessern. Jeden Tag verlieren
              Menschen in Kriegs- und Katastrophengebieten alles, was sie
              besitzen – Häuser, Erinnerungen und vor allem ihre Hoffnung.
              Besonders Kinder stehen oft mit nichts da. Das einzige, was sie
              besitzen, ist ein zerfetztes T-Shirt, das kaum noch Schutz bietet.
              Auf der Plattform KleiderHeld hast du die Möglichkeit, deine
              gebrauchte, aber noch tragbare Kleidung zu spenden und den
              Menschen in Not ein Stück Würde und Hoffnung zurückzugeben. Deine
              Spende kann für jemanden in einer Krise den Unterschied zwischen
              Überleben und Verzweiflung ausmachen. Jede gespendete Jacke, jedes
              Paar Schuhe oder jedes T-Shirt ist ein Zeichen der Solidarität und
              des Mitgefühls. Hilf uns, gemeinsam einen Unterschied zu machen.
              Denn jeder Beitrag zählt und mit deiner Unterstützung können wir
              vielen Menschen in Not ein kleines Stück Lebensqualität
              zurückgeben. Werde auch du ein Teil von KleiderHeld und schenke
              Hoffnung – ein Kleidungsstück nach dem anderen.
            </p>
          </Col>
        </Row>
        <Row className="text-center flex-grow-1">
          <Col>
            <Button variant="success" size="lg" onClick={forwardToRegistrationForm} className="mb-5">
              Jetzt KleiderHeld werden
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
