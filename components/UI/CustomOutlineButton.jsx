import { cn } from "@/lib/utils";
import React from "react";

const CustomOutlineButton = ({ className, children }) => {
  return (
    <button
      className={cn(
        "!tw-rounded-full tw-border-primary tw-px-10 tw-py-4 tw-text-center tw-text-sm tw-font-semibold tw-uppercase !tw-text-light-red tw-outline-none tw-transition-all hover:tw-border-light-red",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default CustomOutlineButton;
