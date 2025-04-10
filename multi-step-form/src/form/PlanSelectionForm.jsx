import { useState } from "react";
import FormNavigation from "../FormNavigation";
import { Switch } from "@/components/ui/switch";
import { useFormContext } from "@/FormContext";

function PlanSelectionForm() {
  const { formData, setFormData } = useFormContext();
  return (
    <>
      <form className="relative -top-14 rounded-xl bg-white p-8 shadow-xl lg:top-0 lg:p-0 lg:shadow-none">
        <fieldset className="space-y-3">
          <legend className="text-2xl font-bold text-primary-marine-blue lg:text-3xl">
            Select your plan
          </legend>
          <p className="text-neutral-cool-gray lg:!mb-10">
            You have the option of monthly or yearly billing.
          </p>

          <div className="!mt-5 grid gap-3 lg:grid lg:grid-cols-3">
            <button
              type="button"
              className={`flex gap-3 rounded-xl border ${formData.plan === "Arcade" ? "border-primary-marine-blue" : "border-neutral-light-gray"} p-4 px-5 transition-all hover:border-primary-marine-blue lg:flex-col lg:gap-12 lg:pr-12`}
              onClick={() =>
                setFormData((data) => ({ ...data, plan: "Arcade" }))
              }
            >
              <img src="/images/icon-arcade.svg" alt="" />
              <span className="flex flex-col gap-0.5 text-start">
                <span className="font-medium text-primary-marine-blue">
                  Arcade
                </span>
                <span className="text-sm text-neutral-cool-gray">
                  {formData.billing === "Yearly" ? "$90/yr" : "$9/mo"}
                </span>
                {formData.billing === "Yearly" && (
                  <span className="mt-1 text-xs">2 months free</span>
                )}
              </span>
            </button>
            <button
              type="button"
              className={`flex gap-3 rounded-xl border ${formData.plan === "Advanced" ? "border-primary-marine-blue" : "border-neutral-light-gray"} p-4 px-5 transition-all hover:border-primary-marine-blue lg:flex-col lg:gap-12 lg:pr-12`}
              onClick={() =>
                setFormData((data) => ({ ...data, plan: "Advanced" }))
              }
            >
              <img src="/images/icon-advanced.svg" alt="" />
              <span className="flex flex-col gap-0.5 text-start">
                <span className="font-medium text-primary-marine-blue">
                  Advanced
                </span>
                <span className="text-sm text-neutral-cool-gray">
                  {formData.billing === "Yearly" ? "$120/yr" : "$12/mo"}
                </span>
                {formData.billing === "Yearly" && (
                  <span className="mt-1 text-xs">2 months free</span>
                )}
              </span>
            </button>
            <button
              type="button"
              className={`flex gap-3 rounded-xl border ${formData.plan === "Pro" ? "border-primary-marine-blue" : "border-neutral-light-gray"} lg: p-4 px-5 transition-all hover:border-primary-marine-blue lg:flex-col lg:gap-12 lg:pr-12`}
              onClick={() => setFormData((data) => ({ ...data, plan: "Pro" }))}
            >
              <img src="/images/icon-pro.svg" alt="" />
              <span className="flex flex-col gap-0.5 text-start">
                <span className="font-medium text-primary-marine-blue">
                  Pro
                </span>
                <span className="text-sm text-neutral-cool-gray">
                  {formData.billing === "Yearly" ? "$150/yr" : "$15/mo"}
                </span>
                {formData.billing === "Yearly" && (
                  <span className="mt-1 text-xs">2 months free</span>
                )}
              </span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-5 p-5 lg:!mt-7">
            <p
              className={`text-sm ${formData.billing === "Monthly" ? "text-primary-marine-blue" : "text-neutral-cool-gray"} font-semibold`}
            >
              Monthly
            </p>
            <Switch
              className="!bg-primary-marine-blue"
              checked={formData.billing === "Yearly"}
              onCheckedChange={(checked) =>
                setFormData((data) => ({
                  ...data,
                  billing: checked ? "Yearly" : "Monthly",
                }))
              }
            />
            <p
              className={`text-sm ${formData.billing === "Yearly" ? "text-primary-marine-blue" : "text-neutral-cool-gray"} font-semibold`}
            >
              Yearly
            </p>
          </div>
        </fieldset>
      </form>
      <FormNavigation />
    </>
  );
}

export default PlanSelectionForm;
