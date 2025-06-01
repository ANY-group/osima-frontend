'use client';

import { useContext } from "react";
import { FavoritesContext } from "./controllers/favorites-context";
import Badge from "@/app/components/ui/badge";

export default function FavoritesQuantityBadge() {
  const { favoriteIds } = useContext(FavoritesContext);

  return <Badge quantity={favoriteIds.length} />;
}