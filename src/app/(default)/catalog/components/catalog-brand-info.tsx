'use client';

import { useContext } from "react";
import { CatalogContext } from "./controllers/catalog-context";
import BrandDescription from "./brand-description";
import CatalogSubcategories from "./catalog-subcategories";
import { CategoriesContext } from "./controllers/categories-context";

export default function CatalogBrandInfo() {
  const categories = useContext(CategoriesContext);
  const { category, brand } = useContext(CatalogContext);

  return (
    <>
      {brand ? (
        <div className="layout-container">
          <BrandDescription brand={brand} />
        </div>
      ) : (
        <div className="layout-container max-md:px-0!">
          <CatalogSubcategories
            categories={category ? category.subcategories : categories}
            slugPrefix={category?.slug}
          />
        </div>
      )}
    </>
  );
}