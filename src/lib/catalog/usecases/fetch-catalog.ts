import api from "@/lib/utils/api";
import { CategoryEntity } from "../types/category";
import { notFound } from "next/navigation";
import { SubcategoryEntity } from "../types/subcategory";
import { BrandEntity } from "../types/brand";
import { Collection } from "@/lib/types/collection";
import { ProductEntity } from "../types/product";
import { FilterEntity } from "../types/filter";

export default async function fetchCatalog({
  categorySlug,
  subcategorySlug,
  brandSlug,
  appliedFilters,
  randomKey,
  loadFilters,
}: {
  categorySlug?: string,
  subcategorySlug?: string,
  brandSlug?: string,
  appliedFilters?: { [key: string]: string | number | Array<string | number> },
  randomKey?: number,
  loadFilters?: boolean,
}
): Promise<{
  category?: CategoryEntity,
  subcategory?: SubcategoryEntity,
  brand?: BrandEntity,
  products: Collection<ProductEntity>,
  filters: Array<FilterEntity>,
}> {

  const res = await api.request('catalog?' + new URLSearchParams({
    category: categorySlug || '',
    subcategory: subcategorySlug || '',
    brand: brandSlug || '',
    randomKey: randomKey?.toString() || '',
    loadFilters: loadFilters ? '1' : '0',
    ...appliedFilters,
  }).toString());

  if (!res.ok) {
    return notFound();
  }

  const { category, subcategory, brand, products, filters } = await res.json();

  return { category, subcategory, brand, products, filters };
}