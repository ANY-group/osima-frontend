'use client';

import { useState } from "react";
import DesktopCategoriesDropdown from "../(default)/catalog/components/desktop-categories-dropdown";
import Link from "./ui/link";
import { AnimatePresence, motion } from "motion/react";
import { CategoryEntity } from "@/lib/catalog/types/category";

export default function BotHeader({ categories }: { categories: Array<CategoryEntity> }) {

  const [openCategory, setOpenCategory] = useState<CategoryEntity | null>(null);
  const close = () => setOpenCategory(null);

  return (
    <div
      className="relative max-md:hidden"
      onMouseLeave={close}
    >
      <nav className="relative flex items-center justify-center gap-8 py-6 border-b bg-background border-divider">
        {categories.map((category, index) => (
          <div key={index} onMouseOver={() => setOpenCategory(category)}>
            <CategoryLink
              name={category.name}
              url={`/catalog/${category.slug}`}
              isActive={openCategory?.slug === category.slug}
              close={close}
            />
          </div>
        ))}
        <CategoryLink
          name='Бренды'
          url="/catalog/brands"
          close={close}
        />
      </nav>
      <DesktopCategoriesDropdown
        openCategory={openCategory}
        close={close}
      />
    </div>
  );
}


const CategoryLink = ({ name, url, close, isActive = false }: {
  name: string,
  url: string,
  close?: () => void,
  isActive?: boolean,
}) => {
  return (
    <Link
      href={url}
      className="inline-block relative whitespace-nowrap"
      onClick={() => {
        setTimeout(() => {
          close?.call(null);
        }, 10);
      }}
    >
      {name}
      <AnimatePresence>
        {isActive && (
          <motion.span
            className="absolute -bottom-0.5 left-0 right-0 h-0.75 mx-auto rounded-full bg-on-primary-muted"
            initial={{ width: 0 }}
            animate={{ width: "30%" }}
            exit={{ width: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
}

