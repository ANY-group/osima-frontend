'use client';

import { ProductEntity } from "@/lib/catalog/types/product";
import { FavoritesContext } from "./favorites-context";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/(footerless)/profile/components/auth-context";

export default function FavoritesProvider({
  children,
}: {
  children: React.ReactNode,
}) {
  const { user } = useContext(AuthContext);
  const [ids, setIds] = useState<Array<number>>([]);

  const initializeFavorites = () => {
    if (user) {
      setIds(user.favorites || []);
    } else {
      const ids = JSON.parse(localStorage.getItem('favorites') || '[]');
      setIds(ids);
    }
  };

  const syncFavorites = async () => {
    if (user) {
      // TODO: send  request
    } else {
      localStorage.setItem('favorites', JSON.stringify(ids));
    }
  };

  useEffect(() => {
    initializeFavorites();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      syncFavorites();
    }, 100);
  }, [ids]);

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
  };

  return (
    <FavoritesContext.Provider value={{ isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}