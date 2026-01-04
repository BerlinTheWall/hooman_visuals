"use client";

import { ImgComparisonSlider } from "@img-comparison-slider/react";

import { Skeleton } from "@/components/ui/skeleton";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

type Props = {
  before: string;
  after: string;
  style?: React.CSSProperties;
  sliderProps?: React.ComponentProps<typeof ImgComparisonSlider>;
  skeltonClassName?: string;
  handleClassName?: string;
};

const BeforeAfter: React.FC<Props> = ({
  before,
  after,
  style,
  sliderProps,
  skeltonClassName,
  handleClassName,
}) => {
  const mounted = useMounted();

  return !mounted ? (
    <Skeleton className={cn("h-[600px] w-full bg-gray-300", skeltonClassName)} />
  ) : (
    <ImgComparisonSlider className="group slider-before-after cursor-pointer" {...sliderProps}>
      <figure slot="first" className="before">
        <img slot="first" style={{ width: 500, height: "auto", ...style }} src={before} />

        <figcaption>Before</figcaption>
      </figure>
      <figure slot="second" className="after">
        <img slot="second" style={{ width: 500, height: "auto", ...style }} src={after} />

        <figcaption>After</figcaption>
      </figure>

      <svg
        {...({ slot: "handle" } as any)}
        className={cn("transition-transform duration-200 group-hover:scale-[1.2]", handleClassName)}
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        viewBox="-8 -3 16 6"
      >
        <path
          stroke="#fff"
          d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
          strokeWidth="1"
          fill="#fff"
          vectorEffect="non-scaling-stroke"
        ></path>
      </svg>
    </ImgComparisonSlider>
  );
};

export default BeforeAfter;
