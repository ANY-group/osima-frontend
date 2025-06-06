'use client';

import BrandEntity from "@/lib/catalog/types/brand";
import CategoryEntity from "@/lib/catalog/types/category";
import FilterEntity from "@/lib/catalog/types/filter";
import FilterValueEntity from "@/lib/catalog/types/filter-value";
import ProductEntity from "@/lib/catalog/types/product";
import SubcategoryEntity from "@/lib/catalog/types/subcategory";
import Collection, { emptyCollection } from "@/lib/types/collection";
import { createContext } from "react";

export const CatalogContext = createContext<{
  category?: CategoryEntity,
  subcategory?: SubcategoryEntity,
  brand?: BrandEntity,
  products: Collection<ProductEntity>,
  filters: Array<FilterEntity>,
  appliedFilters: Array<FilterEntity>,
  isFilterApplied: (filter: FilterEntity, value?: FilterValueEntity) => boolean,
  toggleFilter: (filter: FilterEntity, value: FilterValueEntity) => void,
  clearFilters: () => void,
}>({
  products: emptyCollection,
  filters: [],
  appliedFilters: [],
  toggleFilter: () => { },
  isFilterApplied: () => false,
  clearFilters: () => { },
});