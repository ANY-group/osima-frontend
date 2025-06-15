'use client';

import Link from "@/app/components/ui/link";
import InstagramRoundedIcon from "./ui/icons/instagram-rounded-icon";
import PaymentMethodsIcon from "./ui/icons/payment-methods-icon";
import { chunk } from "@/lib/utils/helpers";
import { useContext } from "react";
import { CategoriesContext } from "../(default)/catalog/(catalog)/components/controllers/categories-context";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col border-t border-divider">
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
      <Image
        src="/images/osima-logo.png"
        alt="Osima"
        width={300}
        height={150}
        className="object-contain max-w-50"
        style={{
          filter: 'brightness(0) saturate(100%)',
        }}
      />
      <div className="flex flex-col gap-0.5">
        <a href="tel:8 (775) 302-80-45" className="text-lg">
          8 (775) 302-80-45
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
        <Link
          href="https://www.instagram.com/osima_cosmetics/"
          className="flex items-center gap-2 mt-1"
          target="_blank"
        >
          <InstagramRoundedIcon />
          <span className="text-text-accent">
            @osima_cosmetics
          </span>
        </Link>
      </div>
      <div>
        <p>
          Способы оплаты:
        </p>
        <div className="flex items-center gap-3">
          <PaymentMethodsIcon />
        </div>
      </div>
      <div>
        <p>
          Служба поддержки:
        </p>
        <Link href="mailto:info@osimacosmetics.kz" className="text-text-accent">
          info@osimacosmetics.kz
        </Link>
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
  const categories = useContext(CategoriesContext);
  const chunks = chunk(categories, 5);

  return (
    <NavigationColumnWrapper title="Каталог">
      <nav className="flex gap-10">
        {chunks.map((categories, index) => (
          <CategoriesList key={index} links={categories.map((category) => (
            {
              name: category.name,
              url: `/catalog/${category.slug}`,
            }))} />
        ))}
      </nav>
    </NavigationColumnWrapper>
  );
}

const CategoriesList = ({ links }: { links: Array<LinkItem> }) => {

  return (
    <ul className="text-sm text-secondary">
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <Link href={link.url}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const InfoNavigationColumn = () => {
  return (
    <NavigationColumnWrapper title="Помощь покупателю">
      <CategoriesList links={[
        {
          name: 'Контакты',
          url: '/contacts',
        },
        {
          name: 'Как сделать заказ',
          url: '/how-to-order',
        },
        {
          name: 'Оплата и возврат',
          url: '/payment',
        },
        {
          name: 'Реквизиты',
          url: '/requisites',
        },
        {
          name: 'Доставка',
          url: '/delivery',
        },
        {
          name: 'Публичная оферта',
          url: '/public-offer',
        },
        {
          name: 'Политика конфиденциальности',
          url: '/privacy-policy',
        },
      ]} />
    </NavigationColumnWrapper>
  );
}

const BottomFooter = () => {
  const year = new Date().getFullYear()

  return (
    <p className="py-5 text-xs text-text-accent">
      {year} © osimacosmetics.kz интернет-магазин
    </p>
  );
}

type LinkItem = {
  name: string,
  url: string,
};