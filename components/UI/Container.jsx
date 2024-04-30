import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ className, children }) => {
  return (
    <section
      className={cn(
        "tw-mx-auto tw-my-14 tw-max-w-7xl tw-px-4 md:tw-px-6 lg:tw-my-20 lg:tw-px-8 xl:tw-my-28 xl:tw-px-10 2xl:tw-px-14",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Container;
