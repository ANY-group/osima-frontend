'use client';

import { FavoritesContext } from "./favorites-context";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/(footerless)/profile/components/controllers/auth-context";
import toggleUserFavorite from "@/lib/auth/usecases/toggle-user-favorite";
import ProductEntity from "@/lib/catalog/types/product";

export default function FavoritesProvider({
  children,
}: {
  children: React.ReactNode,
}) {
  const { user } = useContext(AuthContext);
  const [ids, setIds] = useState<Array<number>>(user?.favorites || []);

  const initializeFavorites = () => {
    if (user) {
      setIds(user.favorites || []);
    } else {
      const ids = JSON.parse(localStorage.getItem('favorites') || '[]');
      setIds(ids);
    }
  };

  const syncFavorites = async (product: ProductEntity) => {
    if (user) {
      toggleUserFavorite(product.id);
    } else {
      localStorage.setItem('favorites', JSON.stringify(ids));
    }
  };

  useEffect(() => {
    initializeFavorites();
  }, []);

  useEffect(() => {
    initializeFavorites();
  }, [user]);

  const isFavorite = (product: ProductEntity) => ids.includes(product.id);

  const toggleFavorite = (product: ProductEntity) => {
    const tmpIds = [...ids];

    const index = tmpIds.findIndex((id) => id == product.id);

    if (index == -1) {
      tmpIds.push(product.id);
    } else {
      tmpIds.splice(index, 1);
    }

    setIds(tmpIds);
    setTimeout(() => {
      syncFavorites(product);
    }, 100);
  };

  return (
    <FavoritesContext.Provider value={{
      isFavorite,
      toggleFavorite,
      favoriteIds: ids,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}