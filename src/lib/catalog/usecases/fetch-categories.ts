import api from "@/lib/utils/api";
import { CategoryEntity } from "../types/category";

export default async function fetchCategories(): Promise<Array<CategoryEntity>> {
  console.log('Fetching categories...');
  const res = await api.request('catalog/groups');

  if (!res.ok) {
    return [];
  }

  const { groups } = await res.json();
  return groups;
}