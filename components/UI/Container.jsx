import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ className, children }) => {
  return (
    <section
      className={cn(
        "tw-mx-auto tw-my-14 tw-max-w-[1440px] tw-px-4 lg:tw-my-20 lg:tw-px-8 xl:tw-my-28 xl:tw-px-10",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Container;
