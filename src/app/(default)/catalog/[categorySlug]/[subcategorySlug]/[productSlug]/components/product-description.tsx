'use client';

import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import ProductEntity from "@/lib/catalog/types/product";

export default function ProductDescription({ product }: {
  product: ProductEntity,
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const tabs = [
    {
      label: 'Описание',
      content: <DescriptionTab product={product} />
    },
    {
      label: 'Характеристики',
      content: <CharacteristicsTab product={product} />
    },
    {
      label: 'Оплата и доставка',
      content: <HowToOrderTab />
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex);
      }}
      className="w-full select-none"
    >
      <div className="flex items-center gap-2 mb-5 border-b border-divider" slot="container-start">
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            index={index}
            isActive={activeIndex == index}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <SwiperSlide key={index}>
          {tab.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const TabButton = ({ index, isActive, children }: {
  index: number,
  isActive: boolean,
  children: React.ReactNode,
}) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={`inline-block px-2 pb-2 border-on-primary-muted whitespace-nowrap text-sm font-medium ${isActive ? 'border-b-3' : 'mb-0.75'}`}
    >
      {children}
    </button>
  );
}

const DescriptionTab = ({ product }: {
  product: ProductEntity,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    (
      <>
        <div
          className={`raw-content text-sm ${!isOpen && 'line-clamp-5'}`}
          dangerouslySetInnerHTML={{ __html: product.description || '' }}
        ></div>
        <button
          type="button"
          className="mt-2 text-sm font-semibold text-on-primary-muted"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? 'Свернуть' : 'Читать дальше'}
        </button>
      </>
    )
  );
}

const CharacteristicsTab = ({ product }: {
  product: ProductEntity,
}) => {
  return (
    <div>
      {product.characteristics?.map((characteristic, index) => (
        <div key={index} className="flex items-center justify-between text-sm">
          <span>
            {characteristic.filter.name}
          </span>
          <div className="flex-grow mx-3 border-b border-dashed border-divider h-2"></div>
          <span className="text-text-accent">
            {characteristic.value.name}
          </span>
        </div>
      ))}
    </div>
  );
}

const HowToOrderTab = () => {
  return (
    <div>How to order</div>
  );
}