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
        <Image
          src="/logo3.png"
          alt="logo"
          sizes="100vw"
          style={{
            width: "33%",
            height: "auto",
            maxHeight: 60,
            objectFit: "contain",
          }}
          className="absolute top-1/2 left-1/2 z-[50] h-auto min-w-[150px] -translate-x-1/2 -translate-y-1/2"
          width={100}
          height={250}
          loading="eager"
          priority
        />
        {BANNERS.map((banner) => (
          <SwiperSlide key={banner.src}>
            <div className="xs:h-[300px] relative h-[200px] w-full select-none md:h-[550px]">
              <div className="absolute inset-0 z-40 bg-black/40" />
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

      <Container className="pb-10">
        <div className="my-10">
          <h2 className="mb-5 ml-5 text-center text-3xl font-bold">Before and After</h2>
          <div className="flex justify-center">
            <BeforeAfter
              before={before1.src}
              after={after1.src}
              skeltonClassName="w-1/2 h-[300px] "
              style={{ width: 300, height: "auto" }}
              handleClassName="size-12"
            />
          </div>
        </div>
        <PresetsSection />

        <DigitalPhotosSection />
      </Container>
    </>
  );
};

export default HomeScreen;
