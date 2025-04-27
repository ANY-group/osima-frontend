import Image from "next/image";
import Link from "@/app/components/ui/link";

export default function HomeAddresses() {
  return (
    <div className="grid md:grid-cols-2">
      <Address />
      <Address />
    </div>
  );
}

const Address = () => {
  return (
    <div className="relative h-70">
      <Image
        src="/images/tmp/store.png"
        alt="Store"
        fill
        className="object-cover brightness-40"
      />
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex flex-col gap-4 p-5 md:p-8">
          <p className="text-2xl font-semibold text-white">
            Магазин на Токомбаева 24 «Английский квартал»
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="#" className="px-6 py-2 bg-background rounded-full font-semibold">
              Смотреть на карте
            </Link>
            <Link href="#" className="px-6 py-2 bg-background rounded-full font-semibold">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}