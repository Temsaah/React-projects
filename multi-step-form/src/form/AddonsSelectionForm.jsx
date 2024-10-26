import FormNavigation from "@/FormNavigation";


function AddonsSelectionForm({ formData, setFormData, currStep, setCurrStep }) {
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
          <label
            className={`flex items-center gap-1 rounded-xl border ${formData.addons.online ? "border-primary-purplish-blue" : "border-neutral-cool-gray"} px-4 py-3`}
          >
            <input
              className="peer h-5 w-5 accent-primary-purplish-blue"
              type="checkbox"
              checked={formData.addons.online}
              onChange={() =>
                setFormData((data) => ({
                  ...data,
                  addons: {
                    ...data.addons,
                    online: !data.addons.online,
                  },
                }))
              }
            />
            <p className="ml-3 grid justify-items-start gap-0.5">
              <span className="text-sm font-medium text-primary-marine-blue">
                Online service
              </span>
              <span className="text-start text-xs text-neutral-cool-gray">
                Access to multiplayer games
              </span>
            </p>
            <p className="ml-auto text-xs text-primary-purplish-blue">
              {formData.billing === "monthly" ? "+$1/mo" : "+$10/yr"}
            </p>
          </label>
          <label
            className={`flex items-center gap-1 rounded-xl border ${formData.addons.extraStorage ? "border-primary-purplish-blue" : "border-neutral-cool-gray"} px-4 py-3`}
          >
            <input
              className="peer h-5 w-5 accent-primary-purplish-blue"
              type="checkbox"
              checked={formData.addons.extraStorage}
              onChange={() =>
                setFormData((data) => ({
                  ...data,
                  addons: {
                    ...data.addons,
                    extraStorage: !data.addons.extraStorage,
                  },
                }))
              }
            />
            <p className="ml-3 grid justify-items-start gap-0.5">
              <span className="text-sm font-medium text-primary-marine-blue">
                Larger storage
              </span>
              <span className="text-start text-xs text-neutral-cool-gray">
                Extra 1TB of cloud save
              </span>
            </p>
            <p className="ml-auto text-xs text-primary-purplish-blue">
              {formData.billing === "monthly" ? "+$2/mo" : "+$20/yr"}
            </p>
          </label>
          <label
            className={`flex items-center gap-1 rounded-xl border ${formData.addons.customProfile ? "border-primary-purplish-blue" : "border-neutral-cool-gray"} px-4 py-3`}
          >
            <input
              className="peer h-5 w-5 accent-primary-purplish-blue"
              type="checkbox"
              checked={formData.addons.customProfile}
              onChange={() =>
                setFormData((data) => ({
                  ...data,
                  addons: {
                    ...data.addons,
                    customProfile: !data.addons.customProfile,
                  },
                }))
              }
            />
            <p className="ml-3 grid justify-items-start gap-0.5">
              <span className="text-sm font-medium text-primary-marine-blue">
                Customizable profile
              </span>
              <span className="text-start text-xs text-neutral-cool-gray">
                Custom theme on your profile
              </span>
            </p>
            <p className="ml-auto text-xs text-primary-purplish-blue">
              {formData.billing === "monthly" ? "+$2/mo" : "+$20/yr"}
            </p>
          </label>
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
