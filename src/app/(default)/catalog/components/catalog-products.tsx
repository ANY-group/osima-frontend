'use client';

import { useContext } from "react";
import CatalogProductsGrid from "./catalog-products-grid";
import { CatalogContext } from "./controllers/catalog-context";

export default function CatalogProducts() {
  const { products, loadMoreProducts } = useContext(CatalogContext);

  return (
    <CatalogProductsGrid products={products} loadMore={loadMoreProducts} />
  );
}