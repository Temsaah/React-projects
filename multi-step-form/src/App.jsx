import { useState } from "react";
import "./App.css";
import FormProgress from "./FormProgress";
import FormContainer from "./FormContainer";

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



export default App;
