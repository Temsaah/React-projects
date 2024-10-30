import { useState } from "react";
import FormNavigation from "../FormNavigation";
import { useFormContext } from "@/FormContext";

function PersonalInfoForm() {
  const { formData, setFormData } = useFormContext();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function isFormValid() {
    setErrors({
      name: "",
      email: "",
      phone: "",
    });

    if (!formData.name) {
      setErrors((prev) => ({ ...prev, name: "This field is required" }));
    }

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "This field is required" }));
    }

    if (!formData.phone) {
      setErrors((prev) => ({ ...prev, phone: "This field is required" }));
    }

    if (formData.name && validateEmail(formData.email) && formData.phone) {
      return true;
    }
    return false;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <>
      <form className="relative -top-14 rounded-xl bg-white p-8 shadow-xl lg:top-0 lg:p-0 lg:shadow-none">
        <fieldset className="space-y-3">
          <legend className="text-2xl font-bold text-primary-marine-blue lg:text-3xl">
            Personal info
          </legend>
          <p className="text-neutral-cool-gray lg:!mb-8">
            Please provide your name, email address, and phone number.
          </p>

          <div className="grid gap-4 lg:gap-6">
            <div className="relative grid gap-1">
              <label
                className="text-xs text-primary-marine-blue"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`min-w-10 rounded-md border ${errors.name ? "border-primary-strawberry-red" : "border-neutral-light-gray"} px-5 py-2.5 font-medium text-primary-marine-blue placeholder:text-sm placeholder:font-semibold focus:outline focus:outline-primary-marine-blue`}
                type="text"
                placeholder="e.g. Stephen King"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((data) => ({ ...data, name: e.target.value }))
                }
              ></input>
              {errors.name && (
                <div className="absolute -top-1 right-0 text-sm font-bold text-primary-strawberry-red">
                  {errors.name}
                </div>
              )}
            </div>

            <div className="relative grid gap-1">
              <label
                className="text-xs text-primary-marine-blue"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className={`min-w-10 rounded-md border ${errors.email ? "border-primary-strawberry-red" : "border-neutral-light-gray"} px-5 py-2.5 font-medium text-primary-marine-blue placeholder:text-sm placeholder:font-semibold focus:outline focus:outline-primary-marine-blue`}
                type="email"
                id="email"
                name="email"
                placeholder="e.g. stephenking@lorem.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((data) => ({ ...data, email: e.target.value }))
                }
              ></input>
              {errors.email && (
                <div className="absolute -top-1 right-0 text-sm font-bold text-primary-strawberry-red">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="relative grid gap-1">
              <label
                className="text-xs text-primary-marine-blue"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className={`min-w-10 rounded-md border ${errors.phone ? "border-primary-strawberry-red" : "border-neutral-light-gray"} px-5 py-2.5 font-medium text-primary-marine-blue placeholder:text-sm placeholder:font-semibold focus:outline focus:outline-primary-marine-blue`}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder="e.g. +1 234 567 890"
                onChange={(e) =>
                  setFormData((data) => ({ ...data, phone: e.target.value }))
                }
              ></input>
              {errors.phone && (
                <div className="absolute -top-1 right-0 text-sm font-bold text-primary-strawberry-red">
                  {errors.phone}
                </div>
              )}
            </div>
          </div>
        </fieldset>
      </form>
      <FormNavigation isFormValid={isFormValid} />
    </>
  );
}

export default PersonalInfoForm;
