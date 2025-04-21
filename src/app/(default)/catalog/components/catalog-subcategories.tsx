'use client';

import ArrowDownBoldIcon from "@/app/components/ui/icons/arrow-down-bold-icon";
import Link from "next/link";

export default function CatalogSubcategories() {
  const subcategories = [...Array(20)];

  return (
    <div className="flex items-center justify-between gap-4 py-2 md:py-6">
      <ArrowWrapper onClick={() => { }} label="пролистать нелево">
        <div className="rotate-90">
          <ArrowDownBoldIcon />
        </div>
      </ArrowWrapper>
      <div className="flex gap-2 w-full overflow-x-auto no-scrollbar px-4 md:px-0">
        {subcategories.map((subcategory, index) => (
          <SubcategoryItem key={index} isActive={index == 1} />
        ))}
      </div>
      <ArrowWrapper onClick={() => { }} label="пролистать направо">
        <div className="-rotate-90">
          <ArrowDownBoldIcon />
        </div>
      </ArrowWrapper>
    </div>
  );
}

const SubcategoryItem = ({ isActive }: {
  isActive: boolean,
}) => {
  return (
    <Link
      href="/catalog/category/subcategory"
      className={`px-6 py-3 ${isActive ? 'bg-accent-light' : 'bg-secondary-muted hover:bg-accent-light transition-colors'} rounded-lg whitespace-nowrap text-xs`}
    >
      Средства для демакияжа
    </Link>
  );
}

const ArrowWrapper = ({ children, onClick, label }: {
  children: React.ReactNode,
  onClick: () => void,
  label: string,
}) => {
  return (
    <button
      onClick={onClick}
      className="hidden md:flex items-center justify-center w-9 h-10 bg-secondary-muted rounded-lg"
      aria-label={label}
    >
      {children}
    </button>
  );
}