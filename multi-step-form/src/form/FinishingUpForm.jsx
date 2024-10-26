import FormNavigation from "@/FormNavigation";

function FinishingUpForm({ formData, setFormData, currStep, setCurrStep }) {
  function isFormValid() {}
  return (
    <>
      <form className="relative -top-14 rounded-xl bg-white px-6 py-8 shadow-xl">
        <fieldset className="space-y-3">
          <legend className="text-2xl font-bold text-primary-marine-blue">
            
          </legend>
          <p className="text-neutral-cool-gray">
            
          </p>
        </fieldset>
      </form>
      <FormNavigation
        currStep={currStep}
        isFormValid={isFormValid}
        setCurrStep={setCurrStep}
      />
    </>
  );
}

export default FinishingUpForm;
