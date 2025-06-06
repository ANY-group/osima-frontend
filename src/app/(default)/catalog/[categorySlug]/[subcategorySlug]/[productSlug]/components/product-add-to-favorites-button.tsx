'use client';

import { FavoritesContext } from "@/app/(default)/catalog/favorites/components/controllers/favorites-context";
import HeartIcon from "@/app/components/ui/icons/heart-icon";
import HeartOutlinedIcon from "@/app/components/ui/icons/heart-outlined-icon";
import ProductEntity from "@/lib/catalog/types/product";
import { useContext } from "react";

export default function ProductAddToFavoritesButton({ product }: {
  product: ProductEntity,
}) {
  const { isFavorite, toggleFavorite } = useContext(FavoritesContext);

  return (
    <button
      className={`flex items-center justify-center h-full aspect-square rounded-lg bg-secondary-muted ${isFavorite(product) && 'text-danger'} `}
      onClick={() => toggleFavorite(product)}
      aria-label="Добавить в избранные"
    >
      {isFavorite(product) ? (
        <HeartIcon />
      ) : (
        <HeartOutlinedIcon />
      )}
    </button>
  );
} 