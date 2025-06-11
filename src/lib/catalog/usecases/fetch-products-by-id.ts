import Collection, { emptyCollection } from "@/lib/types/collection";
import api from "@/lib/utils/api";
import ProductEntity from "../types/product";

export default async function fetchProductsById(ids: Array<number>): Promise<Collection<ProductEntity>> {

  if (ids.length == 0) {
    return emptyCollection;
  }

  const res = await api.request('catalog/products?' + new URLSearchParams(
    ids.map((id) => ['ids[]', id.toString()]),
  ).toString());

  const { products } = await res.json();

  return products;
}