import FormNavigation from "@/FormNavigation";
import { plans } from "@/plans";

function FinishingUpForm({ formData, setFormData, currStep, setCurrStep }) {
  const selectedPlan = plans.find((plan) => plan.name === formData.plan);
  const planPrice = selectedPlan.monthlyPrice;

  const totalAddonsPriceMonthly = formData.addons
    .filter((addon) => addon.selected)
    .reduce((total, addon) => total + addon.monthlyPrice, 0);

  const totalPriceMonthly = planPrice + totalAddonsPriceMonthly;

  function isFormValid() {}
  return (
    <>
      <form className="relative -top-14 rounded-xl bg-white px-6 py-8 shadow-xl">
        <fieldset className="space-y-3">
          <legend className="text-2xl font-bold text-primary-marine-blue">
            Finishing up
          </legend>
          <p className="text-neutral-cool-gray">
            Double-check everything looks OK before confirming.
          </p>
        </fieldset>

        <div className="space-y-5 px-5 py-10">
          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="text-sm font-medium text-primary-marine-blue">
                {formData.plan} ({formData.billing})
              </p>
              <button className="text-sm font-medium text-neutral-cool-gray underline">
                Change
              </button>
            </div>
            <p className="text-sm font-semibold text-primary-marine-blue">
              {formData.billing === "Yearly"
                ? `+$${planPrice * 10}/yr`
                : `+$${planPrice}/mo`}
            </p>
          </div>
          <div className="space-y-3">
            {formData.addons
              .filter((addon) => addon.selected)
              .map((addon) => (
                <div key={addon.id} className="flex justify-between">
                  <p className="text-sm text-neutral-cool-gray">{addon.name}</p>
                  <p className="text-sm">
                    {formData.billing === "Yearly"
                      ? `+$${addon.monthlyPrice * 10}/yr`
                      : `+$${addon.monthlyPrice}/mo`}
                  </p>
                </div>
              ))}
          </div>
          <div className="!mt-10 flex items-center justify-between">
            <p className="text-sm text-neutral-cool-gray">
              Total (per {formData.plan === "Yearly" ? "year" : "month"})
            </p>
            <p className="font-semibold text-primary-purplish-blue">
              {formData.billing === "Yearly"
                ? `+$${totalPriceMonthly * 10}/yr`
                : `+$${totalPriceMonthly}/mo`}
            </p>
          </div>
        </div>
      </form>
      <FormNavigation
        currStep={currStep}
        isFormValid={isFormValid}
        setCurrStep={setCurrStep}
        setFormData={setFormData}
      />
    </>
  );
}

export default FinishingUpForm;
