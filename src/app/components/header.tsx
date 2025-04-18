'use client';

import Link from "next/link";
import LogoIcon from "./ui/icons/logo-icon";
import BurgetIcon from "./ui/icons/burger-icon";
import ShoppingCartIcon from "./ui/icons/shopping-cart-icon";
import UserCircleIcon from "./ui/icons/user-circle-icon";
import HeartOutlinedIcon from "./ui/icons/heart-outlined-icon";
import SearchIcon from "./ui/icons/search-icon";
import { Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

export default function Header() {
  return (
    <header>
      <TopHeader />
      <MidHeader />
      <BotHeader />
    </header>
  );
}

const TopHeader = () => {
  return (
    <div className="relative hidden md:block pb-5 -mb-5 bg-foreground text-background text-sm z-20">
      <div className="flex justify-between items-center px-10 py-3">
        <div className="flex gap-6">
          <Link href="#">
            Магазины
          </Link>
          <Link href="#">
            Контакты
          </Link>
        </div>
        <div className="flex gap-6">
          <Link href="#">
            Доставка и оплата
          </Link>
          <Link href="#">
            Покупателям
          </Link>
        </div>
      </div>
    </div>
  );
}

const MidHeader = () => {
  return (
    <div className="relative flex items-center px-4 md:px-8 py-4 md:py-5 bg-background rounded-t-2xl z-20">
      <div className="flex items-center gap-3 w-full">
        <div className="flex items-center gap-2">
          <BurgetIcon />
          <span className="hidden md:inline">Каталог</span>
        </div>
        <SearchInput />
      </div>
      <Link href="/" className="inline-flex w-20 md:w-28">
        <LogoIcon />
      </Link>
      <div className="flex items-center justify-end gap-2 w-full">
        <Link href="#" aria-label="Корзина" className="flex items-center justify-center w-7.5 h-7.5 md:w-10 md:h-10  p-1.5 rounded-lg bg-primary-muted">
          <ShoppingCartIcon />
        </Link>
        <Link href="#" aria-label="Профиль" className="flex items-center justify-center w-7.5 h-7.5 md:w-10 md:h-10  p-1.5 rounded-lg bg-primary-muted">
          <UserCircleIcon />
        </Link>
        <Link href="#" aria-label="Избранные" className="flex items-center justify-center w-7.5 h-7.5 md:w-10 md:h-10  p-1.5 rounded-lg bg-primary-muted">
          <HeartOutlinedIcon />
        </Link>
      </div>
    </div>
  );
}

const BotHeader = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const categories = ['Уход за лицом', 'Уход за телом', 'Уход за волосами', 'Макияж'];

  return (
    <div
      className="relative hidden md:block z-10"
      onMouseLeave={() => setOpenCategory(null)}
    >
      <nav className="relative flex items-center justify-center gap-8 border-b bg-background border-divider z-20">
        {categories.map((category, index) => (
          <div key={index} onMouseOver={() => setOpenCategory(index)} >
            <CategoryLink category={category} isActive={openCategory === index} />
          </div>
        ))}
      </nav>
      <div className="relative">
        <SubcategoriesNavigation openCategory={openCategory} />
      </div>
    </div>
  );
}

const SearchInput = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-10 h-10 bg-primary-muted rounded-full">
        <SearchIcon />
      </div>
    </div>
  );
}

const CategoryLink = ({ category, isActive = false }: {
  category: string,
  isActive?: boolean,
}) => {
  return (
    <Link
      href="#"
      className="inline-block relative py-6"
    >
      {category}
      <Suspense>
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
      </Suspense>
    </Link>
  );
}

const SubcategoriesNavigation = ({ openCategory }: {
  openCategory: number | null,
}) => {

  const subcategories = [...Array(20)];
  const chunkSize = 8;
  const chunks = [];
  for (let i = 0; i < subcategories.length; i += chunkSize) {
    const chunk = subcategories.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return (
    <Suspense>
      <AnimatePresence>
        {(openCategory != null) && (
          <motion.div
            key="menu"
            className="absolute top-0 left-0 right-0 overflow-hidden bg-background shadow-md"
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: 600 }}
            exit={{ maxHeight: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <div className="layout-container py-8">
              <h4 className="font-bold">
                Категории
              </h4>
              <nav className="flex gap-20 overflow-auto py-10">
                {chunks.map((subcategories, chunkIndex) => (
                  <div key={chunkIndex} className="flex flex-col gap-6">
                    {subcategories.map((subcategory, index) => (
                      <Link href="#" key={index}>
                        Кремы для кожи вокруг глаз
                      </Link>
                    ))}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Suspense>
  );
}