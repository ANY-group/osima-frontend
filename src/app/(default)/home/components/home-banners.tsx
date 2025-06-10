'use client';

import Link from "@/app/components/ui/link";
import BannerEntity from "@/lib/types/banner";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";

export default function HomeBanners({ banners }: {
  banners: Array<BannerEntity>,
}) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      loop
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <Link
            href={banner.linkUrl?.replace('https://vegas.kg/', '') || '#'}
            transition={Boolean(banner.linkUrl)}
            className="block relative w-full aspect-[123/56] my-3 md:my-6"
          >
            <Image
              src={banner.image}
              alt={banner.name}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </Link>
        </SwiperSlide>
      ))}

    </Swiper>
  );
}