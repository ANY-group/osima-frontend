import Link from "./ui/link";

export default function TopHeader() {
  return (
    <div className="relative hidden md:block pb-5 -mb-5 bg-foreground text-background text-sm">
      <div className="flex justify-between items-center px-10 py-3">
        <div className="flex gap-6">
          <Link href="#">
            Магазины
          </Link>
          <Link href="/contacts">
            Контакты
          </Link>
        </div>
        <div className="flex gap-6">
          <Link href="/payment">
            Доставка и оплата
          </Link>
          <Link href="/how-to-order">
            Покупателям
          </Link>
        </div>
      </div>
    </div>
  );
}