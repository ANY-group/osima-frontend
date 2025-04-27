'use client';

import Link from "@/app/components/ui/link";
import LogoIcon from "./ui/icons/logo-icon";
import BurgetIcon from "./ui/icons/burger-icon";
import ShoppingCartIcon from "./ui/icons/shopping-cart-icon";
import UserCircleIcon from "./ui/icons/user-circle-icon";
import HeartOutlinedIcon from "./ui/icons/heart-outlined-icon";
import SearchIcon from "./ui/icons/search-icon";
import { MouseEventHandler, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import MobileCategoriesSidebar from "../(default)/catalog/components/mobile-categories-sidebar";
import DesktopCategoriesDropdown from "../(default)/catalog/components/desktop-categories-dropdown";
import DesktopCartPopover from "../(default)/checkout/components/desktop-cart-popover";
import { useOnRouteChange } from "../hooks/route_change";
import SearchSidebar from "../(default)/catalog/components/search-sidebar";
import AuthSidebar from "../(footerless)/profile/components/auth-sidebar";
import LoadingIndicator from "./ui/loading-indicator";

export default function Header() {
  return (
    <div className="relative h-18 md:h-auto">
      <header className="fixed md:relative top-0 left-0 right-0 w-full z-20">
        <TopHeader />
        <MidHeader />
        <BotHeader />
      </header>
    </div>
  );
}

const TopHeader = () => {
  return (
    <div className="relative hidden md:block pb-5 -mb-5 bg-foreground text-background text-sm">
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
  const [isCategoriesSidebarOpen, setCategoriesSidebarOpen] = useState<boolean>(false);
  const [isCartPopoverOpen, setCartPopoverOpen] = useState<boolean>(false);
  const [isAuthSidebarOpen, setAuthSidebarOpen] = useState<boolean>(false);

  useOnRouteChange(() => {
    closeCart();
    closeSidebar();
  });

  const closeSidebar = () => {
    setCategoriesSidebarOpen(false);
  };

  const closeCart = () => {
    setCartPopoverOpen(false);
  };

  const closeAuthSidebar = () => {
    setAuthSidebarOpen(false);
  };

  const onUserIconClick: MouseEventHandler = (e) => {
    e.preventDefault();

    setAuthSidebarOpen(true);
  }

  return (
    <>
      <div className="relative flex items-center px-4 md:px-8 py-1 md:py-5 bg-background md:rounded-t-2xl z-20">
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={() => setCategoriesSidebarOpen(!isCategoriesSidebarOpen)}
            className="flex md:hidden items-center gap-2"
            aria-label="Каталог"
          >
            <BurgetIcon />
          </button>
          <Link href="/catalog" className="hidden md:flex items-center gap-2">
            <BurgetIcon />
            Каталог
          </Link>
          <SearchInput />
        </div>
        <Link
          href="/"
          className="inline-flex w-20 md:w-28"
          onClick={closeSidebar}
          aria-label="Главная страница"
        >
          <LogoIcon />
        </Link>
        <div
          className="flex items-center justify-end gap-2 w-full"
          onMouseLeave={closeCart}
        >
          <Link
            href="/checkout"
            aria-label="Корзина"
            onMouseOver={() => setCartPopoverOpen(true)}
            className="flex items-center justify-center w-7.5 h-7.5 md:w-10 md:h-10  p-1.5 rounded-lg bg-primary-muted"
          >
            <ShoppingCartIcon />
          </Link>
          <Link
            href="/profile"
            aria-label="Профиль"
            onClick={onUserIconClick}
            className="flex items-center justify-center w-7.5 h-7.5 md:w-10 md:h-10  p-1.5 rounded-lg bg-primary-muted"
          >
            <UserCircleIcon />
          </Link>
          <Link
            href="/catalog/favorites"
            aria-label="Избранные"
            className="flex items-center justify-center w-7.5 h-7.5 md:w-10 md:h-10  p-1.5 rounded-lg bg-primary-muted"
          >
            <HeartOutlinedIcon />
          </Link>
          <DesktopCartPopover
            isOpen={isCartPopoverOpen}
          />
        </div>
      </div>

      <MobileCategoriesSidebar
        isOpen={isCategoriesSidebarOpen}
        close={closeSidebar}
      />

      <AuthSidebar
        isOpen={isAuthSidebarOpen}
        close={closeAuthSidebar}
      />
    </>
  );
}

const BotHeader = () => {
  const categories = ['Уход за лицом', 'Уход за телом', 'Уход за волосами', 'Макияж'];

  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const close = () => setOpenCategory(null);


  return (
    <div
      className="relative hidden md:block"
      onMouseLeave={close}
    >
      <nav className="relative flex items-center justify-center gap-8 border-b bg-background border-divider">
        {categories.map((category, index) => (
          <div key={index} onMouseOver={() => setOpenCategory(index)} >
            <CategoryLink
              category={category}
              href={`/catalog/category-${index}`}
              isActive={openCategory === index}
              close={close}
            />
          </div>
        ))}
        <CategoryLink
          category='Бренды'
          href="/catalog/brands"
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

const SearchInput = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return (
    <>
      <form
        action="/catalog/search"
        className="flex items-center rounded-full bg-primary-muted"
        onClick={() => setSearchOpen(true)}
      >
        <input
          type="text"
          name="q"
          placeholder="Хочу купить"
          className="max-lg:hidden px-5 py-2 outline-0 placeholder-placeholder placeholder:font-normal"
          required
        />
        <div className="flex items-center justify-center w-10 h-10 z-1 cursor-pointer">
          <SearchIcon />
        </div>
      </form>
      <SearchSidebar
        isOpen={isSearchOpen}
        close={closeSearch}
      />
    </>
  );
}

const CategoryLink = ({ category, href, close, isActive = false }: {
  category: string,
  href: string,
  close?: () => void,
  isActive?: boolean,
}) => {
  return (
    <Link
      href={href}
      className="inline-block relative py-6"
      onClick={close}
    >
      {category}
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
      <LoadingIndicator />
    </Link>
  );
}

