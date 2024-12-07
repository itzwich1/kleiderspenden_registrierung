import React, { useState } from "react";
import { Form, Button, Table, Container } from "react-bootstrap";

export default function AdresseForm() {
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    strasse: "",
    hausnummer: "",
    plz: "",
  });

  const [valid, setValid] = useState(true);
  const [errorText, setErrorText] = useState("");

  const dataChanged = (e) => {
    const { name, value } = e.target;
    console.log("Name: ", name);
    console.log("Value: ", value);
    setFormData({ ...formData, [name]: value });
  };

  const checkData = () => {
    let warning = "The following fields are invalid: ";
    let error = false;

    if (formData.vorname.length <= 0) {
        warning += " Vorname";
      error = true;
    }
    if (formData.nachname.length <= 0) {
        warning += " Nachname";
      error = true;
    }
    if (formData.strasse.length <= 0) {
        warning += " Straße";
      error = true;
    }
    if (formData.hausnummer.length <= 0) {
        warning += " Hausnummer";
      error = true;
    }
    if (formData.hausnummer.length <= 0) {
        warning += " PLZ";
      error = true;
    }

    setErrorText(warning);
    setValid(error);
  };

  return (
    <Form className="mt-4" noValidate validated={validated}>
      <h2>Hier ist die Adressen Form</h2>
      {valid && (
          <div
            style={{
              color: "red",
              marginBottom: "15px",
              fontWeight: "bold",
            }}
          >
            {errorText}
          </div>
        )}
      <Form.Group className="mb-3">
        <Form.Control
          required
          type="text"
          name="vorname"
          placeholder="Vorname"
          onChange={dataChanged}
        />
        <Form.Control.Feedback type="valid">
          Sieht gut aus!
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Bitte Vorname eingeben.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          required
          type="text"
          name="nachname"
          placeholder="Nachname"
          onChange={dataChanged}
        />
        <Form.Control.Feedback type="valid">
          Sieht gut aus!
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Bitte Nachname eingeben.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          required
          type="text"
          name="strasse"
          placeholder="Straße"
          onChange={dataChanged}
        />
        <Form.Control.Feedback type="valid">
          Sieht gut aus!
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Bitte Straße eingeben.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          required
          type="text"
          name="hausnummer"
          placeholder="Hausnummer"
          onChange={dataChanged}
        />
        <Form.Control.Feedback type="valid">
          Sieht gut aus!
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Bitte Hausnummer eingeben.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          required
          type="text"
          placeholder="PLZ"
          name="plz"
          onChange={dataChanged}
        />
        <Form.Control.Feedback type="valid">
          Sieht gut aus!
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Bitte PLZ eingeben.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="success" size="lg" onClick={checkData}>
        Daten prüfen
      </Button>
    </Form>
  );
}
