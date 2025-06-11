'use client';

import Subheader from "@/app/components/subheader";
import { useContext } from "react";
import { CatalogContext } from "./controllers/catalog-context";

export default function CatalogSubheader() {
  const { category, subcategory, products } = useContext(CatalogContext);

  return (
    <div className="layout-container">
      <Subheader title={subcategory?.name || category?.name || 'Каталог'}>
        <span className="hidden md:inline">товаров {products.meta.total}</span>
      </Subheader>
    </div>
  );
}