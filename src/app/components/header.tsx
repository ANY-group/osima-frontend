import Link from "next/link";
import LogoIcon from "./ui/icons/logo-icon";
import BurgetIcon from "./ui/icons/burger-icon";
import ShoppingCartIcon from "./ui/icons/shopping-cart-icon";
import UserCircleIcon from "./ui/icons/user-circle-icon";
import HeartOutlinedIcon from "./ui/icons/heart-outlined-icon";
import SearchIcon from "./ui/icons/search-icon";

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
    <div className="hidden md:block pb-5 -mb-5 bg-foreground text-background text-sm">
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
    <div className="flex items-center px-4 md:px-8 py-4 md:py-5 bg-background rounded-t-2xl">
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
  return (
    <nav className="hidden md:flex items-center justify-center gap-8 py-6 border-b border-divider">
      <Link href="#">Уход за лицом</Link>
      <Link href="#">Уход за лицом</Link>
      <Link href="#">Уход за лицом</Link>
      <Link href="#">Уход за лицом</Link>
    </nav>
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