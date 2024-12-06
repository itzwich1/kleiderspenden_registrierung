import React, { useState } from "react";

export default function SpendenkorbForm() {
  const [rows, setRows] = useState([]);
  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const addRow = () => {
    const { input1, input2, input3, input4 } = inputs;

    if (!input1 || !input2 || !input3 || !input4) {
      alert("Bitte alle Felder ausfüllen!");
      return;
    }

    setRows((prevRows) => [
      ...prevRows,
      { input1, input2, input3, input4 },
    ]);

    // Eingabefelder zurücksetzen
    setInputs({
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    });
  };

  const removeRow = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div>
        <input
          type="text"
          name="input1"
          value={inputs.input1}
          onChange={handleInputChange}
          placeholder="Wert 1"
        />
        <input
          type="text"
          name="input2"
          value={inputs.input2}
          onChange={handleInputChange}
          placeholder="Wert 2"
        />
        <input
          type="text"
          name="input3"
          value={inputs.input3}
          onChange={handleInputChange}
          placeholder="Wert 3"
        />
        <input
          type="text"
          name="input4"
          value={inputs.input4}
          onChange={handleInputChange}
          placeholder="Wert 4"
        />
        <button onClick={addRow}>Werte hinzufügen</button>
      </div>

      <table style={{ margin: "20px auto", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={styles.cell}>Spalte 1</th>
            <th style={styles.cell}>Spalte 2</th>
            <th style={styles.cell}>Spalte 3</th>
            <th style={styles.cell}>Spalte 4</th>
            <th style={styles.cell}>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td style={styles.cell}>{row.input1}</td>
              <td style={styles.cell}>{row.input2}</td>
              <td style={styles.cell}>{row.input3}</td>
              <td style={styles.cell}>{row.input4}</td>
              <td style={styles.cell}>
                <button onClick={() => removeRow(index)}>Entfernen</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  cell: {
    border: "1px solid black",
    padding: "8px",
    textAlign: "center",
  },
};

