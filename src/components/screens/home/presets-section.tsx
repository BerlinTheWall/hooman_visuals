import Image from "next/image";
import Link from "next/link";

import { PRESETS } from "@/lib/presets";

const PresetsSection = () => {
  return (
    <section id="presets" className="mt-12 scroll-mt-28 md:mt-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">Preset Store</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Choose Your Pack
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {PRESETS.map((preset) => (
          <Link
            key={preset.id}
            href={`/preset/${preset.id}`}
            className="group block overflow-hidden rounded-2xl border bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-zinc-700">
              {/* Default image */}
              <Image
                src={preset.src}
                alt={preset.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 50vw"
                className="object-contain p-2 transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0"
                placeholder="blur"
                quality={90}
              />

              {/* Hover image */}
              <Image
                src={preset.srcHover}
                alt={preset.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 50vw"
                className="scale-95 rounded-xl object-contain p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
                placeholder="blur"
                quality={90}
              />
            </div>

            <div className="mt-4 flex items-start justify-between gap-3">
              <h3 className="max-w-56 text-base font-semibold text-white sm:text-lg">
                {preset.name}
              </h3>
              <span className="rounded-full border border-zinc-600 bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
                View
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PresetsSection;
