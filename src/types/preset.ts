import { StaticImageData } from "next/image";

export interface IPreset {
  id: string | number;
  src: StaticImageData;
  srcHover: StaticImageData;
  sliders: StaticImageData[];
  html: string;
  name: string;
  price: number;
  disabled?: boolean;
  purchaseLink: string;
}
