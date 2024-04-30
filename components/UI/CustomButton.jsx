import { cn } from "@/lib/utils";
import React from "react";

const CustomButton = ({ className, children }) => {
  return (
    <button
      className={cn(
        "hover:tw-bg-deep-secondary tw-inline-block tw-w-fit tw-cursor-pointer tw-rounded-full tw-border-0 tw-bg-primary tw-px-10 tw-py-4 tw-text-center tw-text-sm tw-font-semibold tw-uppercase tw-tracking-[0.04em] tw-text-white tw-transition-all tw-delay-100 tw-duration-200 tw-ease-linear",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
