import { cva, VariantProps } from "class-variance-authority";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  "absolute top-1/2 -translate-y-1/2 rounded-full cursor-pointer hover:bg-primary/80 bg-primary z-10 size-10 flex items-center select-none justify-center px-2 text-white",
  {
    variants: {
      variant: {
        next: "right-0",
        prev: "left-0",
      },
    },

    defaultVariants: {
      variant: "next",
    },
  }
);

const NextPrevEl = ({ className, variant }: Props) => {
  return (
    <div className={cn(buttonVariants({ variant, className }))}>
      {variant === "next" ? <ChevronRight /> : <ChevronLeft />}
    </div>
  );
};

export default NextPrevEl;
