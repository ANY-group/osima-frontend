import PhoneAltIcon from "./ui/icons/phone-alt-icon";
import Link from "./ui/link";

export default function TopHeader() {
  return (
    <div className="bg-primary-muted">
      <div className="layout-container relative hidden md:block bg-primary-muted text-sm">
        <div className="flex justify-between items-center py-3">
          <div className="flex gap-6">
            <Link href="tel:+77753028045" className="flex items-center gap-1.5">
              <PhoneAltIcon /> 8 (775) 302-8045
            </Link>
          </div>
          <div className="flex gap-6">
            <Link href="#">
              Магазины
            </Link>
            <Link href="/payment">
              Доставка и оплата
            </Link>
            <Link href="/how-to-order">
              Покупателям
            </Link>
            <Link href="/contacts">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}