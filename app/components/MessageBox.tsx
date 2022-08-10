import React from "react";
import clsx from "clsx";
import {
  XCircleIcon,
  CheckCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

type MessageBoxVariants = "error" | "warning" | "success" | "info";

interface MessageBoxProps {
  children: string | React.ReactNode;
  className?: string;
  variant?: MessageBoxVariants;
}

const variantMap = {
  error: {
    color: { bg: "bg-red-50", icon: "text-red-400", text: "text-red-800" },
    icon: XCircleIcon,
  },
  warning: {
    color: {
      bg: "bg-yellow-50",
      icon: "text-yellow-400",
      text: "text-yellow-800",
    },
    icon: ExclamationIcon,
  },
  success: {
    color: {
      bg: "bg-green-50",
      icon: "text-green-400",
      text: "text-green-800",
    },
    icon: CheckCircleIcon,
  },
  info: {
    color: {
      bg: "bg-blue-50",
      icon: "text-blue-400",
      text: "text-blue-800",
    },
    icon: InformationCircleIcon,
  },
};

export default function MessageBox({
  children,
  className,
  variant = "error",
}: MessageBoxProps) {
  const Icon = variantMap[variant].icon;

  return (
    <div
      className={clsx(
        `mt-8 rounded-md ${variantMap[variant].color.bg} p-4 sm:mx-auto sm:w-full sm:max-w-md`,
        className
      )}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon
            className={`h-5 w-5 ${variantMap[variant].color.icon}`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3
            className={`${variantMap[variant].color.text} text-sm font-medium`}
          >
            {children}
          </h3>
        </div>
      </div>
    </div>
  );
}
