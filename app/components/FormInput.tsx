import clsx from "clsx";
import { useField } from "remix-validated-form";
import type { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label?: string;
  labelClassName?: string;
  inputclassName?: string;
  helperText?: string;
  helperTextClassName?: string;
  type?: string;
}

const FormInput = ({
  id,
  name,
  label,
  labelClassName,
  inputclassName,
  helperText,
  helperTextClassName,
  type = "text",
  ...Props
}: FormInputProps) => {
  const { error, getInputProps, validate } = useField(id);
  return (
    <label
      htmlFor={id}
      className={clsx(
        "block text-sm font-medium text-gray-700 w-full",
        labelClassName
      )}
    >
      {label}
      <div className="mt-1">
        <input
          {...getInputProps({
            id,
            onBlur: () => {
              validate();
            },
          })}
          id={id}
          name={name}
          className={clsx(
            "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary",
            inputclassName,
            {
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500":
                error,
            }
          )}
          type={type}
          {...Props}
        />
      </div>
      <div className={clsx("body-small mt-2 text-red-600")} id={`${id}-error`}>
        {error}
      </div>
    </label>
  );
};

export default FormInput;
