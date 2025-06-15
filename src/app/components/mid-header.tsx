'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import { useOnRouteChange } from "../hooks/route_change";
import BurgerIcon from "./ui/icons/burger-icon";
import Link from "./ui/link";
import ShoppingCartIcon from "./ui/icons/shopping-cart-icon";
import UserCircleIcon from "./ui/icons/user-circle-icon";
import HeartOutlinedIcon from "./ui/icons/heart-outlined-icon";
import DesktopCartPopover from "../(default)/checkout/components/desktop-cart-popover";
import MobileCategoriesSidebar from "../(default)/catalog/components/mobile-categories-sidebar";
import AuthSidebar from "../(footerless)/profile/components/auth-sidebar";
import SearchIcon from "./ui/icons/search-icon";
import SearchSidebar from "../(default)/catalog/components/search-sidebar";
import { AuthContext } from "../(footerless)/profile/components/controllers/auth-context";
import CartItemsQuantityBadge from "../(default)/checkout/components/cart-items-quantity-badge";
import FavoritesQuantityBadge from "../(default)/catalog/favorites/components/favorites-quantity-badge";
import { CategoriesContext } from "../(default)/catalog/(catalog)/components/controllers/categories-context";
import Image from "next/image";
import TimesIcon from "./ui/icons/times-icon";

export default function MidHeader() {

  const pathname = usePathname();
  const { user } = useContext(AuthContext);

  const categories = useContext(CategoriesContext);
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

  const onUserIconClick: React.MouseEventHandler = (e) => {
    e.preventDefault();

    setAuthSidebarOpen(true);
  }

  return (
    <>
      <div className="layout-container relative flex items-center gap-4 py-1 md:pt-5 bg-background z-20">
        <Link
          href="/"
          className="relative hidden md:inline-flex h-15 md:h-20 max-w-40 w-full"
          onClick={closeSidebar}
          aria-label="Главная страница"
        >
          <Image
            src="/images/osima-logo.png"
            alt="Osima"
            fill
            className="object-contain p-1"
            style={{
              filter: 'brightness(0) saturate(100%)',
            }}
            priority
          />
        </Link>
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={() => setCategoriesSidebarOpen(!isCategoriesSidebarOpen)}
            className="flex md:hidden items-center gap-2"
            aria-label="Каталог"
          >
            <BurgerIcon />
          </button>
          {/* <Link href="/catalog" className="hidden md:flex items-center gap-2">
            <BurgerIcon />
            Каталог
          </Link> */}
          <SearchInput />
        </div>
        <Link
          href="/"
          className="relative inline-flex md:hidden h-15 md:h-20 w-full"
          onClick={closeSidebar}
          aria-label="Главная страница"
        >
          <Image
            src="/images/osima-logo.png"
            alt="Osima"
            fill
            className="object-contain p-1"
            style={{
              filter: 'brightness(0) saturate(100%)',
            }}
            priority
          />
        </Link>
        <div
          className="flex items-center justify-end gap-2 max-md:w-full"
          onMouseLeave={closeCart}
        >
          <Link
            href="/checkout"
            aria-label="Корзина"
            onMouseOver={() => setCartPopoverOpen(true)}
            className="relative flex items-center justify-center w-7.5 h-7.5 md:w-10 md:h-10  p-1.5 rounded-lg bg-primary-muted"
          >
            <ShoppingCartIcon />
            <CartItemsQuantityBadge />
          </Link>
          <Link
            href={user ? "/profile" : "#"}
            aria-label={user ? "Профиль" : "Авторизоваться"}
            onClick={user ? undefined : onUserIconClick}
            className="flex items-center justify-center w-7.5 h-7.5 md:w-10 md:h-10  p-1.5 rounded-lg bg-primary-muted"
          >
            <UserCircleIcon />
          </Link>
          <Link
            href="/catalog/favorites"
            aria-label="Избранные"
            className="relative flex items-center justify-center w-7.5 h-7.5 md:w-10 md:h-10  p-1.5 rounded-lg bg-primary-muted"
          >
            <HeartOutlinedIcon />
            <FavoritesQuantityBadge />
          </Link>
          <DesktopCartPopover
            isOpen={isCartPopoverOpen && pathname != '/checkout'}
          />
        </div>
      </div>

      <MobileCategoriesSidebar
        categories={categories}
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

const SearchInput = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const query = useSearchParams();

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const q = formData.get('q')?.toString() || '';

    const newParams = new URLSearchParams(query.toString());
    newParams.set('q', q);

    const url = `${(pathname.startsWith('/catalog') ? pathname : '/catalog')}?${newParams}`;

    push(url);
  };

  return (
    <>
      <form
        action="/catalog"
        className="flex items-center rounded-full bg-primary-muted md:w-full"
        onSubmit={onSubmit}
        onClick={() => setSearchOpen(true)}
      >
        <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
          <SearchIcon />
        </div>
        <input
          type="text"
          name="q"
          placeholder="Хочу купить"
          className="max-lg:hidden px-5 py-2 outline-0 placeholder-placeholder placeholder:font-normal w-full"
          defaultValue={query.get('q') || ''}
          required
        />
        <button
          type="button"
          className="hidden lg:flex items-center justify-center w-10 h-10 z-1"
          aria-label="Очистить"
        >
          <TimesIcon />
        </button>

      </form>
      <SearchSidebar
        isOpen={isSearchOpen}
        close={closeSearch}
      />
    </>
  );
}