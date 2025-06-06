import api from "@/lib/utils/api";
import ProductEntity from "../types/product";

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

  const { product } = await res.json();

  return product;
}