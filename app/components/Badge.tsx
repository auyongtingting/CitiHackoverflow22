import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

const badgeColor = {
  white: "bg-white text-indigo-800 border border-gray-200 ",
  gray: "bg-gray-100 text-gray-800",
  red: "bg-red-100 text-red-800",
  orange: "bg-red-100 text-yellow-800",
  yellow: "bg-yellow-100 text-yellow-800",
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
  indigo: "bg-indigo-100 text-indigo-800",
  purple: "bg-purple-100 text-purple-800",
  pink: "bg-pink-100 text-pink-800",
};

const badgeSize = {
  tiny: "px-2 text-[9px] font-normal",
  small: "px-2 text-xs",
  big: "px-3 text-sm py-1",
};

const badgeShape = {
  rounded: "rounded-full",
  roundedBox: "rounded",
};

interface BadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color:
    | "white"
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "purple"
    | "pink";
  size?: "tiny" | "small" | "big";
  shape?: "rounded" | "roundedBox";
  badgeClassName?: string;
}

export default function Badge({
  color,
  size = "small",
  shape = "rounded",
  badgeClassName,
  children,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center self-start py-0.5 font-medium capitalize leading-4",
        badgeColor[color],
        badgeSize[size],
        badgeShape[shape],
        badgeClassName
      )}
    >
      {children}
    </span>
  );
}
