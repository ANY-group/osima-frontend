'use client';

import HeartIcon from "@/app/components/ui/icons/heart-icon";
import { useContext } from "react";
import { FavoritesContext } from "../favorites/components/controllers/favorites-context";
import { ProductEntity } from "@/lib/catalog/types/product";
import HeartOutlinedIcon from "@/app/components/ui/icons/heart-outlined-icon";

export default function ProductCardAddToFavoriteButton({ product }: {
  product: ProductEntity,
}) {
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  return (
    <button
      className={`${isFavorite(product) ? 'text-danger' : 'text-secondary'} transition-colors`}
      onClick={() => toggleFavorite(product)}
    >
      {isFavorite(product) ? <HeartIcon /> : <HeartOutlinedIcon />}
    </button>
  );
}