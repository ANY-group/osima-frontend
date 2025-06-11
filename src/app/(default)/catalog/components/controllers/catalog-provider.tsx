'use client';

import CategoryEntity from "@/lib/catalog/types/category";
import { CatalogContext } from "./catalog-context";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import SubcategoryEntity from "@/lib/catalog/types/subcategory";
import BrandEntity from "@/lib/catalog/types/brand";
import Collection from "@/lib/types/collection";
import ProductEntity from "@/lib/catalog/types/product";
import FilterEntity from "@/lib/catalog/types/filter";
import FilterValueEntity from "@/lib/catalog/types/filter-value";
import { loadMore, mergeCollections } from "@/lib/utils/helpers";

export default function CatalogProvider({
  query,
  initialData,
  children,
}: {
  query: {
    [key: string]: string | undefined,
  },
  initialData: {
    category?: CategoryEntity,
    subcategory?: SubcategoryEntity,
    brand?: BrandEntity,
    products: Collection<ProductEntity>,
    filters: Array<FilterEntity>,
  },
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

  const [category, setCategory] = useState<CategoryEntity | undefined>(initialData.category);
  const [subcategory, setSubcategory] = useState<SubcategoryEntity | undefined>(initialData.subcategory);
  const [brand, setBrand] = useState<BrandEntity | undefined>(initialData.brand);
  const [products, setProducts] = useState<Collection<ProductEntity>>(initialData.products);
  const [filters, setFilters] = useState<Array<FilterEntity>>(initialData.filters);

  useEffect(() => {
    setCategory(initialData.category);
    setSubcategory(initialData.subcategory);
    setBrand(initialData.brand);
    setProducts(initialData.products);
    setFilters(initialData.filters);
  }, [initialData]);

  useEffect(() => {
    const params = new URLSearchParams();
    for (const k in filtersMap) {
      if (filtersMap[k].length) {
        params.append(k, filtersMap[k].join(","));
      }
    }

    replace(`${pathname}?${params.toString().replace(/%2C/g, ',')}`, { scroll: false });
  }, [filtersMap]);

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

  const loadMoreProducts = async () => {
    const loadedData = await loadMore(products);
    setProducts(mergeCollections(products, loadedData.products));
  };

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
      loadMoreProducts,
    }}>
      {children}
    </CatalogContext.Provider>
  );
}