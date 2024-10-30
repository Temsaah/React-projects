import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export function FormProvider({ children }) {
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

  return (
    <FormContext.Provider
      value={{ currStep, setCurrStep, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
}
