import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import AbgabeartForm from "./AbgabeartForm";
import KrisengebietForm from "./KrisengebietForm";
import SpendenkorbForm from "./SpendenkorbForm";
import AdresseForm from "./AdresseForm";
import { Button } from "react-bootstrap";
//import { isVisible } from "@testing-library/user-event/dist/utils";

export default function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [deliveryOption, setDeliveryOption] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState("Ukraine");
  const [disableNext, setDisableNext] = useState(false);
  const [spendenKorb, setSpendenKorb] = useState([]);
  const [adresse, setAdresse] = useState({
    vorname: "",
    nachname: "",
    strasse: "",
    hausnummer: "",
    plz: "",
    datum: "",
  });

  const Abgabeart = {
    ABHOLUNG: 0,
    ABGABE_VOR_ORT: 1,
  };

  let steps = [
    { name: "Abgabeart", isVisible: true },
    { name: "Kriesengebiet", isVisible: true },
    { name: "Adresse", isVisible: deliveryOption === Abgabeart.ABHOLUNG },
    { name: "Spendenkorb", isVisible: true },
    { name: "Bestätigung", isVisible: true },
  ];

  let filtersteps = steps.filter((step) => step.isVisible);

  const nextClicked = () => {
    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const backClicked = () => {
    setDisableNext(false);
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const testClicked = () => {
    console.log(adresse.datum);
  };

  const renderButtons = () => {
    //Jeh nach auswahl maximale Anazahl an Schritten
    let maxSteps = deliveryOption === Abgabeart.ABHOLUNG ? 3 : 2;
    return (
      <div className="d-flex gap-5 mt-3">
        {/* Back Button */}
        <Button
          variant="success"
          size="lg"
          onClick={backClicked}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        {currentStep === maxSteps ? (
          <Button variant="primary" size="lg" onClick={nextClicked}>
            Bestellung Abschließen
          </Button>
        ) : (
          <Button
            variant="success"
            size="lg"
            onClick={nextClicked}
            disabled={currentStep === 3 || disableNext}
          >
            Next
          </Button>
        )}
      </div>
    );
  };

  const renderStepContent = () => {
    const currentVisibleStep = filtersteps[currentStep].name;
    switch (currentVisibleStep) {
      case "Abgabeart":
        return (
          <AbgabeartForm
            deliveryOption={deliveryOption}
            setDeliveryOption={setDeliveryOption}
          />
        );
      case "Kriesengebiet":
        return (
          <KrisengebietForm
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        );
      case "Adresse":
        return (
          <AdresseForm
            adresse={adresse}
            setAdresse={setAdresse}
            setDisableNext={setDisableNext}
          />
        );

      case "Spendenkorb":
        return (
          <SpendenkorbForm
            spendenKorb={spendenKorb}
            setSpendenKorb={setSpendenKorb}
          />
        );
      case "Bestätigung":
        return (
          <div>
            <h3 style={{ color: "green" }}>Ihre Bestellung war erfolgreich</h3>
            {deliveryOption === Abgabeart.ABHOLUNG ? (
              <>
                <p>
                  Vielen dank für deine Spende:{" "}
                  {adresse.vorname + " " + adresse.nachname}
                </p>
                <p>Postleitzahl: {adresse.plz}</p>
                <p>Abholdatum: {adresse.datum}</p>
              </>
            ) : (
              <p>Vielen dank für deine Spende</p>
            )}

            <p>Details:</p>
            <ul>
              {spendenKorb.map((item, index) => (
                <li key={index}>
                  {item.kleidungsart}, {item.groesse},{item.geschlecht},{" "}
                  {item.menge} Stk
                </li>
              ))}
            </ul>
            <p>Krisengebiet: {selectedRegion}</p>
            <p>
              Art der Abholung:{" "}
              {deliveryOption === Abgabeart.ABHOLUNG
                ? "Abholung"
                : "Abgabe vor Ort"}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Stepper
        steps={filtersteps.map((step, index) => ({
          label: step.name,
        }))}
        activeStep={currentStep}
        styleConfig={{
          activeBgColor: "#8bc34a",
          completedBgColor: "#1e352f",
          inactiveBgColor: "#cfd8dc",
        }}
      />
      <div
        style={{ marginTop: "20px" }}
        className="d-flex flex-column align-items-center"
      >
        {renderStepContent()}
        <div style={{ marginTop: "20px" }} className="d-flex gap-5 mt-3">
          {renderButtons()}
          <Button variant="success" size="lg" onClick={testClicked}>
            Test
          </Button>
        </div>
      </div>
    </div>
  );
}
