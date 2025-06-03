import api from "@/lib/utils/api";
import { ProductEntity } from "../types/product";
import { notFound } from "next/navigation";
import { Collection } from "@/lib/types/collection";

export default async function fetchRecommendations(
  productSlug: string,
  subcategorySlug?: string,
  categorySlug?: string,
  brandSlug?: string,
): Promise<Collection<ProductEntity>> {

  const res = await api.request('catalog/products/recommendations?' + new URLSearchParams({
    category: categorySlug || '',
    subcategory: subcategorySlug || '',
    product: productSlug || '',
    brand: brandSlug || '',
    randomKey: Math.floor(Math.random()*1000).toString(),
  }).toString());

  const { products } = await res.json();

  return products;
}