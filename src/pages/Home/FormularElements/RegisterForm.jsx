import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import AbgabeartForm from "./AbgabeartForm";
import KrisengebietForm from "./KrisengebietForm";
import SpendenkorbForm from "./SpendenkorbForm";
import { Button } from "react-bootstrap";

export default function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [deliveryOption, setDeliveryOption] = useState(1);

  const steps = [
    { name: "Abgabeart" },
    { name: "Kriesengebiet" },
    { name: "Spendenkorb" },
  ];

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  //TODELETE
  const test = () => {
    console.log(deliveryOption);
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
        return <KrisengebietForm />;
      case 2:
        return <SpendenkorbForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Stepper
        steps={steps.map((step, index) => ({
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
          <Button
            variant="success"
            size="lg"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          <Button
            variant="success"
            size="lg"
            onClick={handleNext}
            disabled={currentStep === 2}
          >
            Next
          </Button>

          <Button
            variant="success"
            size="lg"
            onClick={test}
            
          >
            Test
          </Button>
        </div>
      </div>
    </div>
  );
}
