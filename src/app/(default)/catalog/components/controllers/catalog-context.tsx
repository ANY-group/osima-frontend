'use client';

import { FilterEntity } from "@/lib/catalog/types/filter";
import { FilterValueEntity } from "@/lib/catalog/types/filter-value";
import { ProductEntity } from "@/lib/catalog/types/product";
import { Collection, emptyCollection } from "@/lib/types/collection";
import { createContext } from "react";

export const CatalogContext = createContext<{
  products: Collection<ProductEntity>,
  filters: Array<FilterEntity>,
  appliedFilters: Array<FilterEntity>,
  isFilterApplied: (filter: FilterEntity, valie: FilterValueEntity) => boolean,
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