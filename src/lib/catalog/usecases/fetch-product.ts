import api from "@/lib/utils/api";
import { ProductEntity } from "../types/product";
import { notFound } from "next/navigation";

export default async function fetchProduct(
  productSlug: string,
  subcategorySlug: string,
  categorySlug: string,
): Promise<ProductEntity> {

  const res = await api.request('catalog/product?' + new URLSearchParams({
    category: categorySlug || '',
    subcategory: subcategorySlug || '',
    product: productSlug || '',
  }).toString());

  if (!res.ok) {
    return notFound();
  }

  const { product } = await res.json();

  return product;
}