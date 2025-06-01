'use client';

import { ProductEntity } from "@/lib/catalog/types/product";
import { createContext } from "react";

export const FavoritesContext = createContext<{
  isFavorite: (product: ProductEntity) => boolean,
  toggleFavorite: (product: ProductEntity) => void,
}>({
  isFavorite: () => false,
  toggleFavorite: (product: ProductEntity) => { },
});