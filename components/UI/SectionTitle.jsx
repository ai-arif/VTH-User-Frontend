import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({ className, children }) => {
  return (
    <div
      className={cn(
        "tw-inline-block tw-w-fit tw-bg-secondary tw-px-3 tw-py-1.5 tw-text-xs tw-font-medium tw-uppercase tw-tracking-wide tw-text-primary md:tw-px-4 md:tw-py-2 md:tw-text-sm lg:tw-px-6 lg:tw-py-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SectionTitle;
