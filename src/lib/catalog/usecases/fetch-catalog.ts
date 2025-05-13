import api from "@/lib/utils/api";
import { CategoryEntity } from "../types/category";
import { notFound } from "next/navigation";
import { SubcategoryEntity } from "../types/subcategory";
import { BrandEntity } from "../types/brand";

export default async function fetchCatalog(
  categorySlug?: string,
  subcategorySlug?: string,
  brandSlug?: string,
): Promise<{
  category?: CategoryEntity,
  subcategory?: SubcategoryEntity,
  brand?: BrandEntity,
}> {

  const res = await api.request('catalog?' + new URLSearchParams({
    category: categorySlug || '',
    subcategory: subcategorySlug || '',
    brand: brandSlug || '',
  }).toString());

  if (!res.ok) {
    return notFound();
  }

  const { category, subcategory, brand } = await res.json();

  return { category, subcategory, brand };
}