'use client';

import CategoryEntity from "@/lib/catalog/types/category";
import { CategoriesContext } from "./categories-context";

export default function CategoriesProvider({ children, categories }: {
  children: React.ReactNode,
  categories: Array<CategoryEntity>,
}) {
  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
}