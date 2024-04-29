import { cn } from "@/lib/utils";
import React from "react";

const CustomButton = ({ className, children }) => {
  return (
    <button
      className={cn(
        "tw-bg-light-red tw-inline-block tw-w-fit tw-cursor-pointer tw-rounded-full tw-border-0 tw-px-6 tw-py-4 tw-uppercase tw-text-white tw-transition-colors hover:tw-bg-deep-red",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
