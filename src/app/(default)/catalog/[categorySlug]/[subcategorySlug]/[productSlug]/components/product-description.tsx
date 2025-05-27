'use client';

import { ProductEntity } from "@/lib/catalog/types/product";
import { useState } from "react";

export default function ProductDescription({ product }: {
  product: ProductEntity,
}) {
  const [isOpen, setOpen] = useState<boolean>(false);


  return (
    <div>
      <div className="overflow-x-auto no-scrollbar flex items-center gap-2 border-b border-divider">
        <TabButton isActive={true}>
          Описание
        </TabButton>
        <TabButton>
          Характеристики
        </TabButton>
        <TabButton>
          Оплата и доставка
        </TabButton>
      </div>
      {product.description && (
        <>
          <div
            className={`raw-content pt-5 text-sm ${!isOpen && 'line-clamp-5'}`}
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <button
            type="button"
            className="mt-2 text-sm font-semibold text-on-primary-muted"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? 'Свернуть' : 'Читать дальше'}
          </button>
        </>
      )}
    </div>
  );
}

const TabButton = ({ children, isActive = false }: {
  children: React.ReactNode,
  isActive?: boolean,
}) => {
  return (
    <button
      type="button"
      className={`inline-block px-2 pb-2 border-on-primary-muted whitespace-nowrap text-sm font-medium ${isActive ? 'border-b-3' : 'mb-0.75'}`}
    >
      {children}
    </button>
  );
}