import { StaticImageData } from "next/image";

import { Category } from "./category";
import { Dimension } from "./dimension";
import { ProjectName } from "./project-name";

export interface IPhoto {
  id: string | number;
  src: StaticImageData;
  // src: string;
  description: string;
  name: string;
  dimension: Dimension[];
  category: Category;
  project: ProjectName;
  price: number;
  disabled?: boolean;
  purchaseLink: string;
}
