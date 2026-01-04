import Image from "next/image";

import { cn } from "@/lib/utils";

const ImageBox = ({ src }: { src: string }) => {
  return (
    <div className="shadow-primary relative w-full shadow">
      <Image
        style={{
          width: "100%",
          height: "auto",
        }}
        alt="car"
        src={src}
        placeholder="blur"
        quality={100}
        sizes="100vw"
      />
    </div>
  );
};

interface Props {
  images: { src: string }[];
  spacing: string;
}

const ColumnImages: React.FC<Props> = ({ images, spacing }) => {
  return (
    <div className={cn("grid h-fit", spacing)}>
      {images.map((image, index) => {
        return <ImageBox {...image} key={index} />;
      })}
    </div>
  );
};

export default ColumnImages;
