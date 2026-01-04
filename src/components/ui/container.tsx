import React, { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const Container: React.FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cn("mx-auto w-full max-w-[100rem] px-6", className)} {...rest}>
      {children}
    </div>
  );
};
