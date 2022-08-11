import { useActionData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import {
  ValidatedForm,
  validationError,
  useIsSubmitting,
} from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import { FormInput, MessageBox } from "~/components";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { badRequest, getUser, createUserSession, restApiClient } from "~/utils";
import logo from "~/images/citibank_logo.png";

interface ActionData {
  formError?: string;
}

export const loginValidation = withZod(
  z.object({
    username: z.string().min(1, "Username is required."),
    password: z.string().min(1, "Password is required."),
  })
);

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (user && user.id) return redirect("/home");
  return {}; // If no user cookie found
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await loginValidation.validate(await request.formData());
  if (formData.error) return validationError(formData.error);

  try {
    const logindata = {
      username: formData.data.username,
      password: formData.data.password,
    };
    const res = await restApiClient.loginUser(logindata);
    if (res?.success) {
      const user = {
        id: "1",
        username: logindata.username,
        accessToken: res.accessToken,
      };
      return createUserSession(user, "/");
    }
    return badRequest({
      formError: "Invalid login credentials. Please try again.",
    });
  } catch (err: any) {
    return badRequest({
      formError: "Unexpected data exception. Please try again later.",
    });
  }
};

const Login = () => {
  const actionData = useActionData() as ActionData;
  const isSubmitting = useIsSubmitting("login");

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-32 w-auto" src={logo} alt="logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Citi academy
          </h2>
        </div>
        <div className="my-5 ">
          {actionData?.formError && (
            <MessageBox className="w-full">{actionData.formError}</MessageBox>
          )}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <ValidatedForm
              id="login"
              method="post"
              action="/login"
              className="space-y-6"
              validator={loginValidation}
            >
              <div>
                <FormInput
                  id="username"
                  name="username"
                  label="Username"
                  autoComplete="off"
                />
              </div>

              <div>
                <FormInput
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="off"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <label
                    htmlFor="remember-me"
                    className=" block text-sm text-gray-900"
                  >
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="mr-2 h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <p className="font-medium text-blue-900 hover:text-blue-700">
                    Forgot your password?
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  Log in
                </button>
              </div>
            </ValidatedForm>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <a
                href="https://www.citibank.com.sg/SGGCB/JSO/username/signon/flow.action"
                className="btn-primary mt-6"
              >
                Sign in with Citi
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
