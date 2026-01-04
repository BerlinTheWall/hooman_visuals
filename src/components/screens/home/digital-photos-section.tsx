"use client";

import Masonry from "@/components/masonry";
import { IMAGES } from "@/lib/images";

const DigitalPhotosSection = () => {
  // const [project, setProject] = useState("");
  // const [category, setCategory] = useState("");

  // const images = useMemo(() => {
  //   return IMAGES.filter(
  //     (img) =>
  //       (category ? img.category === category : true) && (project ? img.project === project : true)
  //   );
  // }, [project, category]);

  return (
    <div className="mt-10 md:mt-20">
      <h2 className="mb-10 ml-5 text-2xl font-bold sm:text-5xl">Digital Photos</h2>
      {/* <div className="flex gap-5">
        <SelectBox
          value={project || undefined}
          setValue={setProject}
          data={PROJECT_NAME}
          placeholder="Project"
        />
        <SelectBox
          value={category || undefined}
          setValue={setCategory}
          data={CATEGORY_TYPE}
          placeholder="Category"
        />
      </div> */}

      <div className="mt-8">
        <Masonry items={IMAGES} />
      </div>
    </div>
  );
};

export default DigitalPhotosSection;
