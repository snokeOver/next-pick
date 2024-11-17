"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { BannerProps } from "@/type-props/interfaces";

const Banner = ({ bannerItmes }: BannerProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div
      className="embla overflow-hidden cursor-pointer relative"
      ref={emblaRef}
    >
      <div className="embla__container flex max-h-screen">
        {bannerItmes?.map((item) => (
          <div className="embla__slide relative" key={item?.id.toString()}>
            <Image
              src={item?.image}
              alt={item?.title}
              width={1920}
              height={1080}
              className="embla__slide"
            />
            <div className="hidden lg:inline absolute top-0 pt-40 xl:pt-72 left-10 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-gray-50">
              <h2 className="text-4xl font-bold max-w-xl">{item?.title}</h2>
              <p className="max-w-xl line-clamp-3">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-300 dark:to-[#121212]" />
    </div>
  );
};

export default Banner;
