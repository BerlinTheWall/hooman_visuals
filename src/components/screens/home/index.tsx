"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BeforeAfter from "./before-after";
import DigitalPhotosSection from "./digital-photos-section";
import PresetsSection from "./presets-section";
import { Container } from "@/components/ui/container";
import after1 from "../../../../public/before-after/after2.jpg";
import before1 from "../../../../public/before-after/before2.jpg";

const BANNERS = [
  {
    src: "/banners/banner1.jpg",
    alt: "banner",
  },
  {
    src: "/banners/banner2.jpg",
    alt: "banner",
  },
  {
    src: "/banners/banner3.jpg",
    alt: "banner",
  },
  {
    src: "/banners/banner4.jpg",
    alt: "banner",
  },
];
const HomeScreen = () => {
  return (
    <>
      <Swiper
        className="relative h-auto w-auto max-w-screen select-none"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        speed={2000}
        modules={[Autoplay]}
      >
        <div className="pointer-events-none absolute inset-0 z-[45] bg-gradient-to-t from-black/80 via-black/35 to-black/25" />
        <div className="absolute inset-0 z-[50] flex items-center justify-center px-4">
          <div className="mx-auto w-full max-w-3xl text-center text-white">
            <Image
              src="/logo3.png"
              alt="logo"
              width={180}
              height={80}
              loading="eager"
              priority
              className="mx-auto mb-6 h-auto w-[45%] max-w-[280px] min-w-[160px] object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
        {BANNERS.map((banner) => (
          <SwiperSlide key={banner.src}>
            <div className="xs:h-[360px] relative h-[280px] w-full select-none md:h-[620px]">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Container className="py-12 md:py-16">
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950 p-6 text-white shadow-2xl md:p-10">
          <div className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
            <div>
              <p className="mb-3 text-xs tracking-[0.22em] text-white/70 uppercase">
                Preview The Difference
              </p>
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
                From flat capture to finished grade
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                Drag the slider and see how the preset treatment shifts mood, contrast, and color
                separation in a real edit workflow.
              </p>
              <div className="xs:grid-cols-3 mt-6 grid max-w-xl grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/20 bg-white/5 px-3 py-4">
                  <p className="text-xl font-bold">4+</p>
                  <p className="mt-1 text-xs text-white/70 uppercase">Total Presets</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/5 px-3 py-4">
                  <p className="text-xl font-bold">Pro</p>
                  <p className="mt-1 text-xs text-white/70 uppercase">Color Profiles</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <BeforeAfter
                before={before1}
                after={after1}
                skeltonClassName="h-[510px] w-[340px]"
                style={{ width: 340, height: "auto" }}
                handleClassName="size-12"
              />
            </div>
          </div>
        </section>

        <PresetsSection />
        <DigitalPhotosSection />
      </Container>
    </>
  );
};

export default HomeScreen;
