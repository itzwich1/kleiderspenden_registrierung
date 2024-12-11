import React, { useState } from "react";
import { Form, Button, Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SpendenkorbForm() {
  //Aktuelle gewaehlte Werte
  const [formData, setFormData] = useState({
    kleidungsart: "",
    groesse: "",
    geschlecht: "",
    menge: "",
  });

  //Speichern des Spendenkorbs
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Zeile entfernen
  const addRow = () => {
    //Sobald alle Werte gefuellt sind
    let isEmpty = Object.values(formData).some((value) => value === "");
    if (!isEmpty) {
      setTableData([...tableData, formData]);
      setFormData({ kleidungsart: "", groesse: "", geschlecht: "", menge: "" });
    } else {
      alert("Bitte alle Felder ausfüllen.");
    }
  };

  //Zeile hinzufuegen
  const deleteRow = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Dein Spendenkorb</h1>

      {/* Formular */}
      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Kleidungsart</Form.Label>
          <Form.Select
            name="kleidungsart"
            value={formData.kleidungsart}
            onChange={handleInputChange}
          >
            <option value="">None</option>
            <option value="TShirt">TShirt</option>
            <option value="Pullover">Pullover</option>
            <option value="Hose">Hose</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Größe</Form.Label>
          <Form.Select
            name="groesse"
            value={formData.groesse}
            onChange={handleInputChange}
          >
            <option value="">None</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Geschlecht</Form.Label>
          <Form.Select
            name="geschlecht"
            value={formData.geschlecht}
            onChange={handleInputChange}
          >
            <option value="">None</option>
            <option value="Maennlich">Männlich</option>
            <option value="Weiblich">Weiblich</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Menge in Stk</Form.Label>
          <Form.Select
            name="menge"
            value={formData.menge}
            onChange={handleInputChange}
          >
            <option value="">None</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Form.Group>

        <Button variant="success" onClick={addRow}>
          Hinzufügen
        </Button>
      </Form>

      {/* Tabelle */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Kleidungsart</th>
            <th>Größe</th>
            <th>Geschlecht</th>
            <th>Menge in Stk</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.kleidungsart}</td>
              <td>{row.groesse}</td>
              <td>{row.geschlecht}</td>
              <td>{row.menge}</td>
              <td>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => deleteRow(index)}
                >
                  Löschen
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
