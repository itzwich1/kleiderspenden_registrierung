import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";

export default function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { name: "Personal Details" },
    { name: "Contact Details" },
    { name: "Review & Submit" },
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
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h2>Step 1: Personal Details</h2>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
        );
      case 1:
        return (
          <div>
            <h2>Step 2: Contact Details</h2>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 3: Review & Submit</h2>
            <p>All steps completed! Click submit to finish.</p>
          </div>
        );
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
      <div style={{ marginTop: "20px" }}>
        {renderStepContent()}
        <div style={{ marginTop: "20px" }}>
          <button onClick={handleBack} disabled={currentStep === 0}>
            Back
          </button>
          <button onClick={handleNext} disabled={currentStep === 2}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
