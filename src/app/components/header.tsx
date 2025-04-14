import Link from "next/link";
import LogoIcon from "./ui/icons/logo-icon";
import BurgetIcon from "./ui/icons/burger-icon";
import ShoppingCartIcon from "./ui/icons/shopping-cart-icon";
import UserCircleIcon from "./ui/icons/user-circle-icon";
import HeartOutlinedIcon from "./ui/icons/heart-outlined-icon";

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
    <div className="pb-5 -mb-5 bg-foreground text-background text-sm">
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
    <div className="flex items-center px-8 py-5 bg-background rounded-t-2xl">
      <div className="flex items-center gap-3 w-full">
        <div className="flex items-center gap-2">
          <BurgetIcon />
          Каталог
        </div>
        <SearchInput />
      </div>
      <div>
        <LogoIcon />
      </div>
      <div className="flex items-center justify-end gap-2 w-full">
        <Link href="#" aria-label="Корзина" className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-muted">
          <ShoppingCartIcon />
        </Link>
        <Link href="#" aria-label="Профиль" className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-muted">
          <UserCircleIcon />
        </Link>
        <Link href="#" aria-label="Избранные" className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-muted">
          <HeartOutlinedIcon />
        </Link>
      </div>
    </div>
  );
}

const BotHeader = () => {
  return (
    <div className="flex items-center justify-center gap-8 py-4 border-b border-divider">
      <Link href="#">Уход за лицом</Link>
      <Link href="#">Уход за лицом</Link>
      <Link href="#">Уход за лицом</Link>
      <Link href="#">Уход за лицом</Link>
    </div>
  );
}

const SearchInput = () => {
  return (
    <div></div>
  );
}