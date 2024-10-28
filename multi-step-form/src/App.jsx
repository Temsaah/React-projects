import { useState } from "react";
import "./App.css";
import Form from "./form/PersonalInfoForm";
import PersonalInfoForm from "./form/PersonalInfoForm";
import PlanSelectionForm from "./form/PlanSelectionForm";
import AddonsSelectionForm from "./form/AddonsSelectionForm";
import FinishingUpForm from "./form/FinishingUpForm";
import ThankMessage from "./form/ThankMessage";

function App() {
  const [currStep, setCurrStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    billing: "Monthly",
    addons: [
      {
        id: "online",
        name: "Online service",
        description: "Access to multiplayer games",
        monthlyPrice: 1,
        selected: false,
      },
      {
        id: "extraStorage",
        name: "Extra storage",
        description: "Extra 1TB of cloud save",
        monthlyPrice: 2,
        selected: false,
      },
      {
        id: "customProfile",
        name: "Customizable profile",
        description: "Custom theme on your profile",
        monthlyPrice: 2,
        selected: false,
      },
    ],

    submitted: false,
  });

  console.log(formData);

  return (
    <div className="h-screen lg:grid lg:place-items-center lg:bg-neutral-magnolia">
      <div className="grid h-full max-w-[1024px] grid-rows-[23vh,1fr] lg:grid lg:h-auto lg:grid-cols-[270px_minmax(600px,1fr)] lg:grid-rows-1 lg:p-4 lg:shadow-xl">
        <FormProgress currStep={currStep} />
        <FormContainer
          currStep={currStep}
          setCurrStep={setCurrStep}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}

function FormProgress({ currStep }) {
  return (
    <div className="bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-center lg:min-h-[550px] lg:min-w-[270px] lg:rounded-xl lg:bg-[url('/images/bg-sidebar-desktop.svg')]">
      <div className="flex items-center justify-center gap-5 p-9 lg:flex-col lg:items-start lg:gap-7">
        <div className="flex items-center gap-5">
          <p
            className={
              currStep === 1
                ? "grid aspect-square h-8 w-8 place-items-center rounded-full bg-white text-sm font-medium"
                : "grid h-8 w-8 place-items-center rounded-full border border-white text-sm font-bold text-white"
            }
          >
            1
          </p>
          <p className="hidden flex-col text-sm font-semibold uppercase tracking-wider text-white lg:flex">
            <span className="text-xs font-normal uppercase tracking-normal text-primary-pastel-blue">
              Step1
            </span>
            Your Info
          </p>
        </div>
        <div className="flex items-center gap-5">
          <p
            className={
              currStep === 2
                ? "grid aspect-square h-8 w-8 place-items-center rounded-full bg-white text-sm font-medium"
                : "grid h-8 w-8 place-items-center rounded-full border border-white text-sm font-bold text-white"
            }
          >
            2
          </p>
          <p className="hidden flex-col text-sm font-semibold uppercase tracking-wider text-white lg:flex">
            <span className="text-xs font-normal uppercase tracking-normal text-primary-pastel-blue">
              Step 2
            </span>
            Select plan
          </p>
        </div>
        <div className="flex items-center gap-5">
          <p
            className={
              currStep === 3
                ? "grid aspect-square h-8 w-8 place-items-center rounded-full bg-white text-sm font-medium"
                : "grid h-8 w-8 place-items-center rounded-full border border-white text-sm font-bold text-white"
            }
          >
            3
          </p>
          <p className="hidden flex-col text-sm font-semibold uppercase tracking-wider text-white lg:flex">
            <span className="text-xs font-normal uppercase tracking-normal text-primary-pastel-blue">
              Step 3
            </span>
            Add-ons
          </p>
        </div>
        <div className="flex items-center gap-5">
          <p
            className={
              currStep === 4
                ? "grid aspect-square h-8 w-8 place-items-center rounded-full bg-white text-sm font-medium"
                : "grid h-8 w-8 place-items-center rounded-full border border-white text-sm font-bold text-white"
            }
          >
            4
          </p>
          <p className="hidden flex-col text-sm font-semibold uppercase tracking-wider text-white lg:flex">
            <span className="text-xs font-normal uppercase tracking-normal text-primary-pastel-blue">
              Step 4
            </span>
            Summary
          </p>
        </div>
      </div>
    </div>
  );
}

function FormContainer({
  children,
  currStep,
  setCurrStep,
  formData,
  setFormData,
}) {
  return (
    <div className="relative grid grid-rows-[auto,1fr] bg-neutral-magnolia p-5 lg:h-full lg:place-self-center lg:py-10">
      {currStep === 1 && (
        <PersonalInfoForm
          currStep={currStep}
          setCurrStep={setCurrStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {currStep === 2 && (
        <PlanSelectionForm
          currStep={currStep}
          setCurrStep={setCurrStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {currStep === 3 && (
        <AddonsSelectionForm
          currStep={currStep}
          setCurrStep={setCurrStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {currStep === 4 && !formData.submitted && (
        <FinishingUpForm
          currStep={currStep}
          setCurrStep={setCurrStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {formData.submitted && <ThankMessage />}
    </div>
  );
}

export default App;
