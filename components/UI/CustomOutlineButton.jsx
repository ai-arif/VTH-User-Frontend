import { cn } from "@/lib/utils";
import React from "react";

const CustomOutlineButton = ({ className, children }) => {
  return (
    <button
      className={cn(
        "tw-border-deep-secondary tw-rounded-full tw-border tw-border-solid tw-px-10 tw-py-4 tw-text-center tw-text-sm tw-font-semibold tw-uppercase tw-text-primary tw-transition-all  tw-delay-100 tw-duration-200 tw-ease-linear hover:tw-border-primary",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default CustomOutlineButton;
