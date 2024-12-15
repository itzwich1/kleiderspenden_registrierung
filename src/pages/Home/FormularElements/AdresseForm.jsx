import React, { useState, useEffect } from "react";
import { Form, Button, Col,Row,Container } from "react-bootstrap";

export default function AdresseForm({adresse, setAdresse, setDisableNext}) {

  useEffect(() => {
    setAdresse({
      vorname: "",
      nachname: "",
      strasse: "",
      hausnummer: "",
      plz: "",
      datum: "",
    });
    setDisableNext(true);
  }, [setAdresse, setDisableNext]);

  const [valid, setValid] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [plzInvalid, setPlzInvalid] = useState(false);

  const dataChanged = (e) => {
    const { name, value } = e.target;
    setAdresse({ ...adresse, [name]: value });
  };

  const checkData = () => {
    let warning = "Eingabefehler in Feld: ";
    let error = false;

    if (adresse.vorname.length <= 0) {
      warning += " Vorname";
      error = true;
    }
    if (adresse.nachname.length <= 0) {
      warning += " Nachname";
      error = true;
    }
    if (adresse.strasse.length <= 0) {
      warning += " Straße";
      error = true;
    }
    if (adresse.hausnummer.length <= 0) {
      warning += " Hausnummer";
      error = true;
    }
    if (adresse.plz.length <= 0) {
      console.log(adresse);
      warning += " PLZ";
      error = true;
    } else {
        console.log("Valid");
      if (adresse.plz.substring(0, 2) !== "95") {
        setPlzInvalid(true);
      }
    }
    console.log(adresse.datum);
    setDisableNext(error);
    setErrorText(warning);
    setValid(error);
  };

  return (
    <Container>
      <Form className="mt-4" noValidate>
        {valid && (
          <Row className="mb-3">
            <Col>
              <div style={{ color: "red" }}>{errorText}</div>
            </Col>
          </Row>
        )}
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="vorname"
                placeholder="Vorname"
                onChange={dataChanged}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="nachname"
                placeholder="Nachname"
                onChange={dataChanged}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} md={8}>
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="strasse"
                placeholder="Straße"
                onChange={dataChanged}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="hausnummer"
                placeholder="Hausnummer"
                onChange={dataChanged}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Control
                required
                type="text"
                placeholder="PLZ"
                name="plz"
                onChange={dataChanged}
              />
              {plzInvalid && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  Ihre Spende kann leider nicht abgeholt werden, da wir nur in
                  Selb (95100) und Umgebung tätig sind!
                </div>
              )}
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Control
                required
                type="datetime-local"
                name="datum"
                placeholder="Datum"
                onChange={dataChanged}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3 text-center">
          <Col>
            <Button variant="success" size="lg" onClick={checkData}>
              Daten prüfen
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
