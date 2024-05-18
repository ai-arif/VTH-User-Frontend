import { cn } from "@/lib/utils";
import React from "react";

const CustomButton = ({ className, children }) => {
  return (
    <button
      className={cn(
        "tw-inline-block tw-w-fit tw-cursor-pointer tw-rounded-full tw-border-0 tw-bg-primary tw-px-4 tw-py-2 tw-text-center tw-text-xs tw-font-semibold tw-uppercase tw-text-white tw-transition-all tw-delay-100 tw-duration-200 tw-ease-linear hover:tw-bg-deep-secondary md:tw-px-5 md:tw-text-sm lg:tw-px-10 lg:tw-py-4 lg:tw-tracking-[0.04em]",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
