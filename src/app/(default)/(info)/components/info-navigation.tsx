'use client';

import Breadcrumbs from "@/app/components/breadcrumbs";
import BonusInfoIcon from "@/app/components/ui/icons/bonus-info-icon";
import DeliveryInfoIcon from "@/app/components/ui/icons/delivery-info-icon";
import PaymentInfoIcon from "@/app/components/ui/icons/payment-info-icon";
import RequisitesInfoIcon from "@/app/components/ui/icons/requisites-info-icon";
import ShoppingBagInfoIcon from "@/app/components/ui/icons/shopping-bag-info-icon";
import Link from "@/app/components/ui/link";
import { usePathname } from "next/navigation";

export default function InfoNavigation() {
  const pathname = usePathname();

  const items = [
    {
      icon: <PaymentInfoIcon />,
      label: 'Оплата',
      href: '/payment',
    },
    {
      icon: <RequisitesInfoIcon />,
      label: 'Реквизиты',
      href: '/requisites',
    },
    {
      icon: <DeliveryInfoIcon />,
      label: 'Доставка',
      href: '/delivery',
    },
    {
      icon: <ShoppingBagInfoIcon />,
      label: 'Как сделать заказ',
      href: '/how-to-order',
    },
    {
      icon: <BonusInfoIcon />,
      label: 'Бонусы',
      href: '/bonuses',
    },
  ];

  const activeItem = items.find((item) => item.href == pathname);

  return (
    <>
      <Breadcrumbs items={[
        {
          label: 'Помощь',
          href: null,
        },
        ...(activeItem ? [
          {
            label: activeItem?.label,
            href: null,
          },
        ] : []),
      ]} />

      <nav className="flex max-md:flex-col gap-3 md:gap-4 w-full my-5">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`p-2 md:p-7 w-full border border-divider ${pathname == item.href && 'border-success ring-1 ring-success'} rounded-lg text-center text-sm font-semibold whitespace-nowrap`}
          >
            <div className="flex items-center justify-center mb-2 text-success">
              {item.icon}
            </div>
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}