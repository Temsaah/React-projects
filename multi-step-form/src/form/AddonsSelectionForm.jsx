import { useFormContext } from "@/FormContext";
import FormNavigation from "@/FormNavigation";

function AddonsSelectionForm() {
  const { formData, setFormData } = useFormContext();

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
      <form className="relative -top-14 rounded-xl bg-white p-8 shadow-xl lg:top-0 lg:min-w-[400px] lg:p-0 lg:shadow-none">
        <fieldset className="space-y-3">
          <legend className="text-2xl font-bold text-primary-marine-blue lg:text-3xl">
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
              className={`flex items-center gap-1 rounded-xl border ${addon.selected ? "border-primary-purplish-blue" : "border-neutral-cool-gray"} px-4 py-3 transition-all hover:cursor-pointer hover:border-primary-purplish-blue`}
            >
              <input
                className="peer h-5 w-5 accent-primary-purplish-blue"
                type="checkbox"
                checked={addon.selected}
                onChange={() => handleAddonChange(addon.id)}
              />
              <p className="ml-3 grid justify-items-start gap-0.5">
                <span className="text-sm font-medium text-primary-marine-blue lg:text-[0.95rem]">
                  {addon.name}
                </span>
                <span className="text-start text-xs text-neutral-cool-gray lg:text-sm">
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

      <FormNavigation />
    </>
  );
}

export default AddonsSelectionForm;
