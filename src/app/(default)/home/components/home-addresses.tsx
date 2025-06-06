import Image from "next/image";
import Link from "@/app/components/ui/link";
import WarehouseEntity from "@/lib/types/warehouse";

export default function HomeAddresses({
  warehouses,
}: {
  warehouses: Array<WarehouseEntity>,
}) {
  return (
    <div className="grid md:grid-cols-2">
      {warehouses.slice(0, 2).map((warehouse, index) => (
        <Address key={index} warehouse={warehouse} />
      ))}
    </div>
  );
}

const Address = ({ warehouse }: {
  warehouse: WarehouseEntity,
}) => {
  return (
    <div className="relative h-70">
      <Image
        src={warehouse.image || "/images/tmp/store.png"}
        alt={warehouse.address}
        fill
        className="object-cover brightness-40"
      />
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex flex-col gap-4 p-5 md:p-8">
          <p className="text-2xl font-semibold text-white">
            {warehouse.address}
          </p>
          <div className="flex gap-4 flex-wrap">
            {warehouse.mapLink && (
              <Link
                href={warehouse.mapLink}
                target="_blank"
                className="px-6 py-2 bg-background rounded-full font-semibold"
                transition={false}
              >
                Смотреть на карте
              </Link>
            )}
            <Link href="#" className="px-6 py-2 bg-background rounded-full font-semibold">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}