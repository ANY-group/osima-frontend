'use client';

import Subheader from "@/app/components/subheader";
import CatalogProductsGrid from "../components/catalog-products-grid";
import SubscribeForm from "@/app/components/subscribe-form";
import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "./components/controllers/favorites-context";
import fetchProductsById from "@/lib/catalog/usecases/fetch-products-by-id";
import HeartIcon from "@/app/components/ui/icons/heart-icon";
import Collection, { emptyCollection } from "@/lib/types/collection";
import ProductEntity from "@/lib/catalog/types/product";

export default function FavoritePage() {
  const { favoriteIds } = useContext(FavoritesContext);
  const [products, setProducts] = useState<Collection<ProductEntity>>(emptyCollection);

  const fetchProducts = () => {
    fetchProductsById(favoriteIds)
      .then((products) => {
        setProducts(products);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [favoriteIds]);

  return (
    <main>
      <section className="sticky md:static top-18 bg-background border-divider z-10">
        <div className="layout-container">
          <Subheader title="Избранное">
            {products.data.length > 0 && (
              <span className="hidden md:inline">
                товаров {products.meta.total}
              </span>
            )}
          </Subheader>
        </div>
      </section>
      <section className="layout-container md:mt-8">
        {products.data.length > 0 ? (
          <CatalogProductsGrid products={products} />
        ) : (
          <FavoritesEmpty />
        )}
      </section>
      <section>
        <SubscribeForm />
      </section>
    </main>
  );
}

const FavoritesEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-80 text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
        В Избранном пока ничего нет
      </h2>
      <p className="text-text-accent text-xs sm:text-sm">
        Добавляйте товары в Избранное с помощью
        <span className="inline-block align-middle ml-2 text-danger">
          <HeartIcon />
        </span>
      </p>
    </div>
  );
};