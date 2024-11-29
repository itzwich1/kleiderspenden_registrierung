import React, { Component } from "react";
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
          <p className="text">
            Willkommen auf meiner Webseite! Hier findest du spannende Inhalte.
          </p>
        </div>
        
      </div>
    );
  }
}

export default Home;
