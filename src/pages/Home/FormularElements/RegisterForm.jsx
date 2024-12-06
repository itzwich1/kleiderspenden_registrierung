import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import AbgabeartForm from "./AbgabeartForm";
import KrisengebietForm from "./KrisengebietForm";
import SpendenkorbForm from "./SpendenkorbForm";
import AdresseForm from "./AdresseForm";
import { Button } from "react-bootstrap";

export default function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [deliveryOption, setDeliveryOption] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState("");

  /*const [userData, setUserData] = useState({
    abgabeart: {},
    krisengebiet: {},
    spendenkorb: {},
  });*/

  let steps = [
    { name: "Abgabeart", isVisible: true },
    { name: "Kriesengebiet", isVisible: true },
    { name: "Adresse", isVisible: deliveryOption === 0 },
    { name: "Spendenkorb", isVisible: true },
  ];

  let filtersteps = steps.filter((step) => step.isVisible);

  const nextClicked = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const backClicked = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const testClicked = () => {
    console.log("Steps: ", steps.length);
    console.log("FilterSteps: ", filtersteps.length);
  };

  const renderButtons = () => {
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
        {currentStep === 3 ? (
          <Button variant="primary" size="lg">
            Bestellung Abschließen
          </Button>
        ) : (
          <Button
            variant="success"
            size="lg"
            onClick={nextClicked}
            disabled={currentStep === 3}
          >
            Next
          </Button>
        )}
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <AbgabeartForm
            deliveryOption={deliveryOption}
            setDeliveryOption={setDeliveryOption}
          />
        );
      case 1:
        //selectedRegionChange funktion an Kind Componente uebergeben
        return (
          <KrisengebietForm
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        );
      case 2:
        return <AdresseForm/>;

      case 3:
        return <SpendenkorbForm />;
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
