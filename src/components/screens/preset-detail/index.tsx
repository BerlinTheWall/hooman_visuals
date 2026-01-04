"use client";

import { notFound } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { usePreventImageActions } from "@/hooks/use-prevent-image-actions";
import { IPreset } from "@/types/preset";

import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import NextPrevEl from "@/components/next-prev-el";

const PresetScreen = ({ preset }: { preset: IPreset }) => {
  const { stopContext, stopDrag } = usePreventImageActions();

  if (!preset) return notFound();

  return (
    <Container className="pt-10 pb-16">
      <div className="grid grid-cols-1 gap-10 sm:gap-6 lg:grid-cols-2">
        <div>
          <div className="relative">
            <NextPrevEl className="mdNextElSwiper" variant="next" />
            <NextPrevEl className="mdPrevElSwiper" variant="prev" />
            <Swiper
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              navigation={{
                enabled: true,
                nextEl: ".mdNextElSwiper",
                prevEl: ".mdPrevElSwiper",
                disabledClass: "opacity-50 pointer-events-none",
              }}
              loop
              modules={[Navigation]}
            >
              {preset.sliders.map((slider) => (
                <SwiperSlide key={slider.src}>
                  <img
                    onContextMenu={stopContext}
                    onDragStart={stopDrag}
                    alt={preset.name}
                    src={slider.src}
                    className="mx-auto h-96 object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mx-auto mt-16 grid max-w-xl gap-8">
            <div className="flex flex-col gap-1">
              <span className="font-bold">Total Price</span>
              <span>CA$ {preset.price}</span>
            </div>

            <Button
              className="h-[48px] w-full text-base"
              onClick={() => window.open(preset.purchaseLink, "_blank")}
            >
              BUY NOW
            </Button>
          </div>
        </div>

        <div>
          <div dangerouslySetInnerHTML={{ __html: preset.html }} />
        </div>
      </div>
    </Container>
  );
};

export default PresetScreen;
