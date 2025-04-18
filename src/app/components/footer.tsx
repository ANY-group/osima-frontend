import Link from "next/link";
import LogoIcon from "./ui/icons/logo-icon";
import InstagramRoundedIcon from "./ui/icons/instagram-rounded-icon";
import PaymentMethodsIcon from "./ui/icons/payment-methods-icon";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-between py-10">
          <LogoColumn />
          <ContactsColumn />
          <CatalogNavigationColumn />
          <InfoNavigationColumn />
        </div>
        <BottomFooter />
      </div>
    </footer>
  );
}

const LogoColumn = () => {
  return (
    <div className="flex flex-col gap-10">
      <LogoIcon />
      <div className="flex flex-col gap-0.5">
        <a href="tel:8 (777) 262-30-60" className="text-lg">
          8 (777) 262-30-60
        </a>
        <p className="text-sm text-secondary">
          Ежедневно с 9:00 до 21:00
        </p>
      </div>
    </div>
  );
}

const ContactsColumn = () => {
  return (
    <div className="flex flex-col gap-3 text-secondary">
      <div>
        <p>
          Подписывайтесь на нас:
        </p>
        <div className="flex items-center gap-2 mt-1">
          <InstagramRoundedIcon />
          <span className="text-text-accent">
            @vegas
          </span>
        </div>
      </div>
      <div>
        <p>
          Способы оплаты:
        </p>
        <PaymentMethodsIcon />
      </div>
      <div>
        <p>
          Служба поддержки:
        </p>
        <p className="text-text-accent">
          info@vegas.uz
        </p>
      </div>
    </div>
  );
}

const NavigationColumnWrapper = ({ title, children }: {
  title: string,
  children: React.ReactNode,
}) => {
  return (
    <div>
      <h6 className="font-bold mb-2.5">
        {title}
      </h6>
      {children}
    </div>
  );
}

const CatalogNavigationColumn = () => {
  return (
    <NavigationColumnWrapper title="Каталог">
      <nav className="flex gap-10">
        <CategoriesList />
        <CategoriesList />
      </nav>
    </NavigationColumnWrapper>
  );
}

const CategoriesList = () => {
  return (
    <ul className="text-sm text-secondary">
      <li className="mb-2">
        <Link href="#">Макияж</Link>
      </li>
      <li className="mb-2">
        <Link href="#">Уход за лицом</Link>
      </li>
      <li className="mb-2">
        <Link href="#">Для дома</Link>
      </li>
      <li className="mb-2">
        <Link href="#">Уход за волосами</Link>
      </li>
    </ul>
  );
}

const InfoNavigationColumn = () => {
  return (
    <NavigationColumnWrapper title="Помощь покупателю">
      <CategoriesList />
    </NavigationColumnWrapper>
  );
}

const BottomFooter = () => {
  const year = new Date().getFullYear()

  return (
    <p className="py-5 text-xs text-text-accent">
      {year} © vegas.uz интернет-магазин
    </p>
  );
}