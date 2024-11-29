import React, { Component } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import "./Home.css";
import logo from "../../images/KleiderHeld_mit_Schriftzug.png";
//import {StyleSheet, Button, View, Text, Alert} from 'react-native';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="centered-content">
          <img src={logo} alt="Logo" className="logo" />
          <p className="textBox">
            Mit KleiderHeld kannst du zum wahren Superhelden des Alltags werden.
            Indem du dich für diejenigen einsetzt, die es am dringendsten
            brauchen, hilfst du, das Leben von Menschen in Krisengebieten ein
            Stück weit zu verbessern. Jeden Tag verlieren Menschen in Kriegs-
            und Katastrophengebieten alles, was sie besitzen – Häuser,
            Erinnerungen und vor allem ihre Hoffnung. Besonders Kinder stehen
            oft mit nichts da. Das einzige, was sie besitzen, ist ein zerfetztes
            T-Shirt, das kaum noch Schutz bietet. Auf der Plattform KleiderHeld
            hast du die Möglichkeit, deine gebrauchte, aber noch tragbare
            Kleidung zu spenden und den Menschen in Not ein Stück Würde und
            Hoffnung zurückzugeben. Deine Spende kann für jemanden in einer
            Krise den Unterschied zwischen Überleben und Verzweiflung ausmachen.
            Jede gespendete Jacke, jedes Paar Schuhe oder jedes T-Shirt ist ein
            Zeichen der Solidarität und des Mitgefühls. Hilf uns, gemeinsam
            einen Unterschied zu machen. Denn jeder Beitrag zählt und mit deiner
            Unterstützung können wir vielen Menschen in Not ein kleines Stück
            Lebensqualität zurückgeben. Werde auch du ein Teil von KleiderHeld
            und schenke Hoffnung – ein Kleidungsstück nach dem anderen.
          </p>
          <Button variant="success" size="lg">
            Jetzt KleiderHeld werden
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
