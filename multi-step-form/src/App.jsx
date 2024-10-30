import { useState } from "react";
import "./App.css";
import FormProgress from "./FormProgress";
import FormContainer from "./FormContainer";
import { FormProvider } from "./FormContext";

function App() {
  return (
    <FormProvider>
      <div className="h-screen lg:grid lg:place-items-center lg:bg-neutral-magnolia">
        <div className="grid h-full max-w-[1024px] grid-rows-[23vh,1fr] lg:grid lg:h-auto lg:grid-cols-[270px_minmax(600px,1fr)] lg:grid-rows-1 lg:p-4 lg:shadow-xl">
          <FormProgress />
          <FormContainer />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
