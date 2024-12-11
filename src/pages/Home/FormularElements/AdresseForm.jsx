import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function AdresseForm({setDisableNext}) {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    strasse: "",
    hausnummer: "",
    plz: "",
  });

  useEffect(() => {
    setDisableNext(true);
  }, [setDisableNext]);

  const [valid, setValid] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [plzInvalid, setPlzInvalid] = useState(false);

  const dataChanged = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const checkData = () => {
    let warning = "Die Folgenden Eingabefelder enthalten Fehler: ";
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
    if (formData.plz.length <= 0) {
      console.log(formData);
      warning += " PLZ";
      error = true;
    } else {
        console.log("Valid");
      if (formData.plz.substring(0, 2) !== "95") {
        setPlzInvalid(true);
      }
    }

    console.log(error);
    setDisableNext(error);
    setErrorText(warning);
    setValid(error);
  };

  return (
    <Form className="mt-4" noValidate>
      <h2>Hier ist die Adressen Form</h2>
      {valid && (
        <div
          style={{
            color: "red",
            marginBottom: "15px",
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
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          required
          type="text"
          name="nachname"
          placeholder="Nachname"
          onChange={dataChanged}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          required
          type="text"
          name="strasse"
          placeholder="Straße"
          onChange={dataChanged}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          required
          type="text"
          name="hausnummer"
          placeholder="Hausnummer"
          onChange={dataChanged}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          required
          type="text"
          placeholder="PLZ"
          name="plz"
          onChange={dataChanged}
        />
        {plzInvalid && (
          <div
            style={{
              color: "red",
              marginBottom: "15px",
            }}
          >
            Ihre Spende kann leider nicht abgeholt werden, da wir nur in Selb (95100) und Umgebung tätig sind!
          </div>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          required
          type="date"
          name="datum"
          placeholder="Datum"
          onChange={dataChanged}
        />
      </Form.Group>
      <Button variant="success" size="lg" onClick={checkData}>
        Daten prüfen
      </Button>
    </Form>
  );
}
