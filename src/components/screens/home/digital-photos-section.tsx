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
    <section id="photos" className="mt-12 scroll-mt-28 md:mt-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">Portfolio</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Digital Photos
          </h2>
        </div>
      </div>
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
        <Masonry items={IMAGES} className="!gap-4 md:!gap-6" />
      </div>
    </section>
  );
};

export default DigitalPhotosSection;
