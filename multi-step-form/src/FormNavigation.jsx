function FormNavigation({ currStep, isFormValid, setCurrStep, setFormData }) {
  function handleNextStep() {
    if (currStep === 4) {
      setFormData((data) => ({ ...data, submitted: true }));
      return;
    }

    if (isFormValid() !== false) {
      setCurrStep((step) => ++step);
    }
  }
  return (
    <div className="flex justify-between self-end">
      {currStep > 1 && (
        <button
          className="text-sm font-medium text-neutral-cool-gray"
          onClick={() => setCurrStep((step) => --step)}
        >
          Go Back
        </button>
      )}
      <button
        className="ml-auto rounded-md bg-primary-marine-blue px-5 py-2 text-sm font-medium text-white"
        onClick={handleNextStep}
      >
        {currStep === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}

export default FormNavigation;
