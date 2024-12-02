import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export default function AbgabeartForm({ deliveryOption, setDeliveryOption }) {
  return (
    <div className="d-flex flex-column align-items-center">
      
        <h3>Bitte wählen sie eine Abgabeart wie sie Ihre gespendete Kleidung uns zukommen lassen wollen.</h3>
        <ToggleButtonGroup type="radio" name="options" value={deliveryOption} onChange={(value) => setDeliveryOption(value)} >
          <ToggleButton id="tbg-radio-1" value={1} variant="success">
            Abholung
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value={2} variant="success">
            Abgabe vor Ort
          </ToggleButton>
        </ToggleButtonGroup>
      
    </div>
  );
}
