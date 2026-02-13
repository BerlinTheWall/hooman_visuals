"use client";

import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

import NextPrevEl from "@/components/next-prev-el";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { usePreventImageActions } from "@/hooks/use-prevent-image-actions";
import { IPreset } from "@/types/preset";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PresetScreen = ({ preset }: { preset: IPreset }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { stopContext, stopDrag } = usePreventImageActions();

  if (!preset) return notFound();

  return (
    <Container className="pt-8 pb-20 md:pt-12">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <section className="rounded-3xl border bg-gradient-to-b from-black to-zinc-900 p-4 text-white shadow-2xl sm:p-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="rounded-full border border-white/20 px-3 py-1 text-xs tracking-[0.18em] uppercase">
              Preset Preview
            </p>
            <p className="text-sm text-white/70">{preset.sliders.length} samples</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <NextPrevEl className="presetMainNext right-3 z-20" variant="next" />
            <NextPrevEl className="presetMainPrev left-3 z-20" variant="prev" />
            <Swiper
              className="w-full select-none"
              spaceBetween={20}
              navigation={{
                enabled: true,
                nextEl: ".presetMainNext",
                prevEl: ".presetMainPrev",
                disabledClass: "opacity-50 pointer-events-none",
              }}
              loop={preset.sliders.length > 1}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[Navigation, Thumbs]}
            >
              {preset.sliders.map((slider, index) => (
                <SwiperSlide key={slider.src}>
                  <div className="relative aspect-[4/3] min-h-[260px] w-full bg-black sm:min-h-[360px]">
                    <Image
                      onContextMenu={stopContext}
                      onDragStart={stopDrag}
                      alt={`${preset.name} sample ${index + 1}`}
                      src={slider}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain p-4 sm:p-6"
                      draggable={false}
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mt-4 w-full select-none"
            breakpoints={{
              640: {
                slidesPerView: 5,
              },
            }}
          >
            {preset.sliders.map((slider, index) => (
              <SwiperSlide key={`thumb-${slider.src}`} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-white/20 bg-black/50 transition group-hover:border-white/80">
                  <Image
                    onContextMenu={stopContext}
                    onDragStart={stopDrag}
                    alt={`${preset.name} thumbnail ${index + 1}`}
                    src={slider}
                    fill
                    sizes="120px"
                    className="object-contain p-2"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="h-fit rounded-3xl border bg-white p-6 shadow-sm xl:sticky xl:top-24">
          <p className="mb-3 text-xs tracking-[0.2em] text-zinc-500 uppercase">Preset Collection</p>
          <h1 className="text-2xl leading-tight font-semibold text-zinc-900 sm:text-3xl">
            {preset.name}
          </h1>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border bg-zinc-50 p-3">
              <p className="text-zinc-500">Included</p>
              <p className="mt-1 text-base font-semibold text-zinc-900">
                {preset.presetsCount} presets
              </p>
            </div>
            <div className="rounded-2xl border bg-zinc-50 p-3">
              <p className="text-zinc-500">License</p>
              <p className="mt-1 text-base font-semibold text-zinc-900">Commercial use</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-900 bg-zinc-900 p-5 text-white">
            <p className="text-xs tracking-[0.16em] text-white/70 uppercase">Total Price</p>
            <p className="mt-2 text-3xl font-bold">${preset.price}</p>
            <p className="mt-2 text-sm text-white/70">Instant delivery after checkout</p>
            <Button
              className="mt-5 h-12 w-full bg-white text-base font-semibold text-zinc-900 hover:bg-white/90"
              onClick={() => window.open(preset.purchaseLink, "_blank", "noopener,noreferrer")}
              onContextMenu={stopContext}
            >
              Buy Preset Pack
            </Button>
          </div>

          <button
            type="button"
            className="mt-5 w-full text-sm font-medium text-zinc-600 underline-offset-4 hover:underline"
            onClick={() =>
              document.getElementById("preset-details")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Read full pack details
          </button>
        </section>
      </div>

      <section
        id="preset-details"
        className="mt-10 rounded-3xl border bg-white p-6 shadow-sm sm:p-8"
      >
        <div
          className="[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h4]:mt-5 [&_h4]:text-lg [&_h4]:font-semibold [&_p]:mt-3 [&_p]:leading-relaxed [&_section]:space-y-3"
          dangerouslySetInnerHTML={{ __html: preset.html }}
        />
      </section>
    </Container>
  );
};

export default PresetScreen;
