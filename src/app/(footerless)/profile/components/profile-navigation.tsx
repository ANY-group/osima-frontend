'use client';

import CameraIcon from "@/app/components/ui/icons/camera-icon";
import ClockIcon from "@/app/components/ui/icons/clock-icon";
import GiftIcon from "@/app/components/ui/icons/gift-icon";
import LogoutIcon from "@/app/components/ui/icons/logout-icon";
import UserIcon from "@/app/components/ui/icons/user-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";

export default function ProfileNavigation() {
  return (
    <nav className="max-md:py-4 min-w-2xs max-md:w-full max-md:h-full">
      <NavList>
        <NavListItem href="#">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent">
            <CameraIcon />
          </div>
          <p>
            Здравствуйте,<br />
            Nurdaulet
          </p>
        </NavListItem>
      </NavList>
      <NavList>
        <NavListItem className="max-md:hidden" href="/profile">
          <UserIcon />
          Личные данные
        </NavListItem>
        <NavListItem className="md:hidden" href="/profile/info">
          <UserIcon />
          Личные данные
        </NavListItem>
      </NavList>
      <NavList>
        <NavListItem href="/profile/bonuses">
          <GiftIcon />
          Бонусы
        </NavListItem>
        <NavListItem href="/profile/orders">
          <ClockIcon />
          История заказов
        </NavListItem>
      </NavList>
      <NavList>
        <NavListItem href="#" className="text-danger">
          <LogoutIcon />
          Выйти
        </NavListItem>
      </NavList>
    </nav>
  );
}

const NavList = ({ children }: {
  children: React.ReactNode,
}) => {
  return (
    <ul className="mb-2 rounded-lg bg-background">
      {children}
    </ul>
  );
}

const NavListItem = ({
  className,
  href,
  onClick,
  children,
}: {
  className?: string,
  href: string,
  onClick?: MouseEventHandler,
  children: React.ReactNode,
}) => {
  const pathname = usePathname();

  return (
    <li className={className}>
      <Link
        href={href}
        className={`flex items-center gap-4 p-4 text-xs font-bold rounded-lg ${pathname == href && 'bg-success text-success-foreground'}`}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}