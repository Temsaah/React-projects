import AddonsSelectionForm from "./form/AddonsSelectionForm";
import FinishingUpForm from "./form/FinishingUpForm";
import PersonalInfoForm from "./form/PersonalInfoForm";
import PlanSelectionForm from "./form/PlanSelectionForm";
import ThankMessage from "./form/ThankMessage";

const stepComponents = {
  1: PersonalInfoForm,
  2: PlanSelectionForm,
  3: AddonsSelectionForm,
  4: FinishingUpForm,
};

function FormContainer({ currStep, setCurrStep, formData, setFormData }) {
  const StepComponent = stepComponents[currStep];
  return (
    <div className="relative grid grid-rows-[auto,1fr] bg-neutral-magnolia p-5 lg:h-full lg:place-self-center lg:py-10">
      {formData.submitted ? (
        <ThankMessage />
      ) : (
        StepComponent && (
          <StepComponent
            currStep={currStep}
            setCurrStep={setCurrStep}
            formData={formData}
            setFormData={setFormData}
          />
        )
      )}
    </div>
  );
}

export default FormContainer;
