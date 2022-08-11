import { useState } from "react";
import { FormInput } from "~/components";
import { Switch } from "@headlessui/react";
import clsx from "clsx";
import { ValidatedForm } from "remix-validated-form";
import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";

export const formValidator = withZod(z.any());

const BookAdvisor = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Speak to a Citibank advisor
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Fill up the form to speak to one of our advisors to address your concerns. 
          </p>
        </div>
        <div className="mt-12">
          <ValidatedForm
            id="login"
            method="post"
            action="/login"
            validator={formValidator}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <FormInput
                name="first-name"
                id="first-name"
                label="First name"
                labelClassName="block text-sm font-medium text-gray-700"
              />
            </div>
            <div>
              <FormInput
                name="last-name"
                id="last-name"
                label="Last name"
                labelClassName="block text-sm font-medium text-gray-700"
              />
            </div>
            <div className="sm:col-span-2">
              <FormInput
                name="company"
                id="company"
                label="Company"
                labelClassName="block text-sm font-medium text-gray-700"
              />
            </div>
            <div className="sm:col-span-2">
              <FormInput
                name="email"
                id="email"
                label="Email"
                labelClassName="block text-sm font-medium text-gray-700"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    defaultValue=""
                  />
                </div>
              </label>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={clsx(
                      agreed ? "bg-indigo-600" : "bg-gray-200",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={clsx(
                        agreed ? "translate-x-5" : "translate-x-0",
                        "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the{" "}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button type="button" className="btn-primary w-full">
                Lets talk
              </button>
            </div>
          </ValidatedForm>
        </div>
      </div>
    </div>
  );
};

export default BookAdvisor;
