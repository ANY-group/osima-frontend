import api from "@/lib/utils/api";
import { BrandEntity } from "../types/brand";

export default async function fetchBrands(): Promise<Array<BrandEntity>> {

  const res = await api.request('catalog/brands');

  const { brands } = await res.json();
  return brands;

}