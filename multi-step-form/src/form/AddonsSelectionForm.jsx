import FormNavigation from "@/FormNavigation";

function AddonsSelectionForm({ formData, setFormData, currStep, setCurrStep }) {
  function handleAddonChange(id) {
    setFormData((prevData) => ({
      ...prevData,
      addons: prevData.addons.map((addon) =>
        addon.id === id ? { ...addon, selected: !addon.selected } : addon,
      ),
    }));
  }

  function isFormValid() {}
  return (
    <>
      <form className="relative -top-14 rounded-xl bg-white px-6 py-8 shadow-xl">
        <fieldset className="space-y-3">
          <legend className="text-2xl font-bold text-primary-marine-blue">
            Pick add-ons
          </legend>
          <p className="text-neutral-cool-gray">
            Add-ons help enhance your gaming experience.
          </p>
        </fieldset>

        <div className="mt-10 grid gap-4">
          {formData.addons.map((addon) => (
            <label
              key={addon.id}
              className={`flex items-center gap-1 rounded-xl border ${addon.selected ? "border-primary-purplish-blue" : "border-neutral-cool-gray"} px-4 py-3`}
            >
              <input
                className="peer h-5 w-5 accent-primary-purplish-blue"
                type="checkbox"
                checked={addon.selected}
                onChange={() => handleAddonChange(addon.id)}
              />
              <p className="ml-3 grid justify-items-start gap-0.5">
                <span className="text-sm font-medium text-primary-marine-blue">
                  {addon.name}
                </span>
                <span className="text-start text-xs text-neutral-cool-gray">
                  {addon.description}
                </span>
              </p>
              <p className="ml-auto text-xs text-primary-purplish-blue">
                {formData.billing === "Monthly"
                  ? `+$${addon.monthlyPrice}/mo`
                  : `+$${addon.monthlyPrice * 10}/yr`}
              </p>
            </label>
          ))}
        </div>
      </form>

      <FormNavigation
        currStep={currStep}
        isFormValid={isFormValid}
        setCurrStep={setCurrStep}
      />
    </>
  );
}

export default AddonsSelectionForm;
