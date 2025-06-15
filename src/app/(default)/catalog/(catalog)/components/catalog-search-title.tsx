'use client';

import { useContext } from "react";
import { CatalogContext } from "./controllers/catalog-context";

export default function CatalogSearchTitle({ q }: {
  q: string,
}) {
  const { products } = useContext(CatalogContext);

  if (!q) {
    return;
  }

  return (
    <p className="text-center text-2xl font-bold my-8">
      По запросу «{q}» {products.meta.total == 0 ? (
        <>
          ничего не найдено
        </>
      ) : (
        <>
          найдено {products.meta.total} товаров
        </>
      )
      }
    </p >
  );
}