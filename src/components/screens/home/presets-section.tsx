import Image from "next/image";
import Link from "next/link";

import { PRESETS } from "@/lib/presets";

const PresetsSection = () => {
  return (
    <div className="mt-10 md:mt-20">
      <h2 className="mb-10 ml-5 text-2xl font-bold sm:text-5xl">Presets</h2>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-2 md:gap-16 lg:grid-cols-4">
        {PRESETS.map((preset) => (
          <Link
            key={preset.id}
            href={`/preset/${preset.id}`}
            className="group block transition-transform duration-200 focus-visible:outline-none"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              {/* Default image */}
              <Image
                src={preset.src}
                alt={preset.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 50vw"
                className="object-contain transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0"
                placeholder="blur"
                quality={90}
              />

              {/* Hover image */}
              <Image
                src={preset.srcHover}
                alt={preset.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 50vw"
                className="scale-90 rounded-xl object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
                placeholder="blur"
                quality={90}
              />
            </div>

            <div className="mt-2 flex flex-col items-center justify-center gap-1">
              <h3 className="max-w-56 text-center text-lg font-bold">{preset.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PresetsSection;
