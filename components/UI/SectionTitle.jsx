import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({ className, children }) => {
  return (
    <div
      className={cn(
        "tw-inline-block tw-w-fit tw-bg-primary tw-px-6 tw-py-3 tw-font-medium tw-tracking-wide",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SectionTitle;
