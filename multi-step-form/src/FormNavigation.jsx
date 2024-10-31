import { useFormContext } from "./FormContext";

function FormNavigation({ isFormValid }) {
  const { currStep, setCurrStep, setFormData } = useFormContext();

  function handleNextStep() {
    if (currStep === 4) {
      setFormData((data) => ({ ...data, submitted: true }));
      return;
    }

    if (!isFormValid || isFormValid()) {
      setCurrStep((step) => ++step);
    }
  }

  return (
    <div className="flex justify-between self-end">
      {currStep > 1 && (
        <button
          className="text-sm font-medium text-neutral-cool-gray hover:text-primary-marine-blue"
          onClick={() => setCurrStep((step) => --step)}
        >
          Go Back
        </button>
      )}
      <button
        className="ml-auto rounded-md bg-primary-marine-blue px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-marine-blue/85 lg:px-6 lg:py-3"
        onClick={handleNextStep}
      >
        {currStep === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}

export default FormNavigation;
