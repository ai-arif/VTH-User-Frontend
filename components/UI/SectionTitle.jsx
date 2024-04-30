import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({ className, children }) => {
  return (
    <div
      className={cn(
        "tw-inline-block tw-w-fit tw-bg-secondary tw-px-6 tw-py-3 tw-text-sm tw-font-medium tw-uppercase tw-tracking-wide tw-text-primary",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SectionTitle;
