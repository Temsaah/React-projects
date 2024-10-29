function FormProgress({ currStep }) {
  const steps = [
    { num: 1, label: "Your Info" },
    { num: 2, label: "Select Plan" },
    { num: 3, label: "Add-ons" },
    { num: 4, label: "Summary" },
  ];

  return (
    <div className="bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-center lg:min-h-[550px] lg:min-w-[270px] lg:rounded-xl lg:bg-[url('/images/bg-sidebar-desktop.svg')]">
      <div className="flex items-center justify-center gap-5 p-9 lg:flex-col lg:items-start lg:gap-7">
        {steps.map((step) => (
          <StepIndicator
            key={step.num}
            step={step}
            isCurrent={step.num === currStep}
          />
        ))}
      </div>
    </div>
  );
}

function StepIndicator({ step, isCurrent }) {
  return (
    <div className="flex items-center gap-5">
      <p
        className={
          isCurrent
            ? "grid aspect-square h-8 w-8 place-items-center rounded-full bg-white text-sm font-medium"
            : "grid h-8 w-8 place-items-center rounded-full border border-white text-sm font-bold text-white"
        }
      >
        {step.num}
      </p>
      <p className="hidden flex-col text-sm font-semibold uppercase tracking-wider text-white lg:flex">
        <span className="text-xs font-normal uppercase tracking-normal text-primary-pastel-blue">
          Step {step.num}
        </span>
        {step.label}
      </p>
    </div>
  );
}

export default FormProgress;
