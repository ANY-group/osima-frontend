import api from "@/lib/utils/api";
import CategoryEntity from "../types/category";

export default async function fetchCategories(): Promise<Array<CategoryEntity>> {

  const res = await api.request('catalog/groups');

  const { groups } = await res.json();

  return groups;
}