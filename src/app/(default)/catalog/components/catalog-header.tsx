import ArrowLeftAltIcon from "@/app/components/ui/icons/arrow-left-alt-icon";

export default function CatalogHeader() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex items-center justify-start gap-px md:gap-1 w-full text-xs font-bold uppercase">
        <ArrowLeftAltIcon />
        Назад
      </div>
      <h1 className="text-xl font-medium whitespace-nowrap">
        Уход за лицом
      </h1>
      <div className="text-right w-full font-medium">
        <span className="hidden md:inline">товаров 12</span>
      </div>
    </div>
  );
}