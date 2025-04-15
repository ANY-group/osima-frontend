import Link from "next/link";
import ChatIcon from "./ui/icons/chat-icon";
import DeliveryCarIcon from "./ui/icons/delivery-car-icon";
import CircleQuestionIcon from "./ui/icons/circle-question-icon";
import UserLikeIcon from "./ui/icons/user-like-icon";
import LogoIcon from "./ui/icons/logo-icon";
import InstagramRoundedIcon from "./ui/icons/instagram-rounded-icon";
import PaymentMethodsIcon from "./ui/icons/payment-methods-icon";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="border-y border-divider">
        <div className="layout-container ">
          <TopFooter />
        </div>
      </div>
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

const TopFooter = () => {
  const items = [
    {
      title: "Доставка и оплата",
      href: "#",
      icon: <ChatIcon />,
    },
    {
      title: "Доставка и оплата",
      href: "#",
      icon: <DeliveryCarIcon />,
    },
    {
      title: "Покупателям",
      href: "#",
      icon: <CircleQuestionIcon />,
    },
    {
      title: "Покупателям",
      href: "#",
      icon: <UserLikeIcon />,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-7 py-8">
      <h6 className="text-xl font-semibold leading-6">
        Покупателю
      </h6>
      <div className="flex flex-col md:flex-row md:items-center justify-end gap-7 md:gap-10 lg:gap-16">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-2"
          >
            {item.icon} {item.title}
          </Link>
        ))}
      </div>
    </div>
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
  title: String,
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
      2024 © vegas.uz интернет-магазин
    </p>
  );
}