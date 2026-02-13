"use client";

import Image, { StaticImageData } from "next/image";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

import { Skeleton } from "@/components/ui/skeleton";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

type BeforeAfterImage = StaticImageData | string;

type Props = {
  before: BeforeAfterImage;
  after: BeforeAfterImage;
  style?: React.CSSProperties;
  sliderProps?: React.ComponentProps<typeof ImgComparisonSlider>;
  skeltonClassName?: string;
  handleClassName?: string;
};

type ImageWithSlotProps = React.ComponentProps<typeof Image> & {
  slot?: string;
};

const ImageWithSlot = Image as React.FC<ImageWithSlotProps>;

type SvgWithSlotProps = React.SVGProps<SVGSVGElement> & {
  slot?: string;
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
  const handleSlotProps: SvgWithSlotProps = { slot: "handle" };
  const getDisplayMetrics = (image: BeforeAfterImage) => {
    const baseSize =
      typeof image === "string" ? { width: 500, height: 500 } : { width: image.width, height: image.height };
    const width = typeof style?.width === "number" ? style.width : baseSize.width;
    const height =
      typeof style?.height === "number" ? style.height : Math.round((width * baseSize.height) / baseSize.width);

    return {
      width,
      height,
      sizes: `${width}px`,
      style: { width, height: "auto", ...style },
    };
  };

  const beforeMetrics = getDisplayMetrics(before);
  const afterMetrics = getDisplayMetrics(after);

  return !mounted ? (
    <Skeleton className={cn("h-[600px] w-full bg-gray-300", skeltonClassName)} />
  ) : (
    <ImgComparisonSlider className="group slider-before-after cursor-pointer" {...sliderProps}>
      <figure slot="first" className="before">
        <ImageWithSlot
          slot="first"
          src={before}
          alt="Before edit"
          width={beforeMetrics.width}
          height={beforeMetrics.height}
          sizes={beforeMetrics.sizes}
          style={beforeMetrics.style}
        />

        <figcaption>Before</figcaption>
      </figure>
      <figure slot="second" className="after">
        <ImageWithSlot
          slot="second"
          src={after}
          alt="After edit"
          width={afterMetrics.width}
          height={afterMetrics.height}
          sizes={afterMetrics.sizes}
          style={afterMetrics.style}
        />

        <figcaption>After</figcaption>
      </figure>

      <svg
        {...handleSlotProps}
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
