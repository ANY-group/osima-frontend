'use client';

import { FilterEntity } from "@/lib/catalog/types/filter";
import { CatalogContext } from "./catalog-context";
import { FilterValueEntity } from "@/lib/catalog/types/filter-value";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { Collection } from "@/lib/types/collection";
import { ProductEntity } from "@/lib/catalog/types/product";
import { CategoryEntity } from "@/lib/catalog/types/category";
import { SubcategoryEntity } from "@/lib/catalog/types/subcategory";
import { BrandEntity } from "@/lib/catalog/types/brand";

export default function CatalogProvider({
  query,
  category,
  subcategory,
  brand,
  products,
  filters,
  children,
}: {
  query: {
    [key: string]: string | undefined,
  },
  category?: CategoryEntity,
  subcategory?: SubcategoryEntity,
  brand?: BrandEntity,
  products: Collection<ProductEntity>,
  filters: Array<FilterEntity>,
  children: React.ReactNode,
}) {
  const { replace } = useRouter();
  const pathname = usePathname();

  const tmpFiltersMap: { [key: string]: Array<string> } = {};
  for (const propName in query) {
    if (typeof query[propName] == 'string') {
      tmpFiltersMap[propName] = query[propName].split(',').filter(v => v);
    }
  }

  const [filtersMap, setFiltersMap] = useState<{ [key: string]: Array<string> }>(tmpFiltersMap);

  useEffect(() => {
    const params = new URLSearchParams();
    for (const k in filtersMap) {
      if (filtersMap[k].length) {
        params.append(k, filtersMap[k].join(","));
      }
    }

    replace(`${pathname}?${params.toString().replace(/%2C/g, ',')}`);
  }, [pathname, filtersMap]);

  const isFilterApplied = (filter: FilterEntity, value?: FilterValueEntity) => {
    return value ? (filtersMap[filter.slug] || []).includes(value.slug) : filtersMap[filter.slug]?.length > 0;
  };

  const toggleFilter = (filter: FilterEntity, value: FilterValueEntity) => {
    const valueIndex = (filtersMap[filter.slug] || []).indexOf(value.slug);

    const tmpFiltersMap = { ...filtersMap };

    if (valueIndex != -1) {
      tmpFiltersMap[filter.slug].splice(valueIndex, 1);
    } else {
      if (!tmpFiltersMap[filter.slug]) {
        tmpFiltersMap[filter.slug] = [];
      }
      tmpFiltersMap[filter.slug].push(value.slug);
    }

    setFiltersMap(tmpFiltersMap);
  };

  const clearFilters = () => {
    setFiltersMap({});
  };

  const appliedFilters = filters
    .map((filter) => ({
      ...filter,
      values: filter.values.filter((value) => filtersMap[filter.slug]?.includes(value.slug)),
    }))
    .filter((filter) => filter.values?.length);

  return (
    <CatalogContext.Provider value={{
      category,
      subcategory,
      brand,
      products,
      filters,
      appliedFilters,
      isFilterApplied,
      toggleFilter,
      clearFilters,
    }}>
      {children}
    </CatalogContext.Provider>
  );
}