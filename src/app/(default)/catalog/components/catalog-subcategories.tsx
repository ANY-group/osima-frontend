'use client';

import ArrowDownBoldIcon from "@/app/components/ui/icons/arrow-down-bold-icon";
import Link from "@/app/components/ui/link";
import { CategoryEntity } from "@/lib/catalog/types/category";
import { SubcategoryEntity } from "@/lib/catalog/types/subcategory";
import { usePathname } from "next/navigation";

export default function CatalogSubcategories({ categories, slugPrefix }: {
  categories: Array<CategoryEntity | SubcategoryEntity>,
  slugPrefix?: string,
}) {
  const pathname = usePathname();
  const isActive = (slug: string) => pathname.split('/').at(-1) == slug;

  return (
    <div className="flex items-center justify-between gap-4 my-2 md:my-6">
      <ArrowWrapper onClick={() => { }} label="пролистать нелево">
        <div className="rotate-90">
          <ArrowDownBoldIcon />
        </div>
      </ArrowWrapper>
      <div className="flex gap-2 w-full overflow-x-auto no-scrollbar px-4 md:px-0">
        <Link
          href={`/catalog/${slugPrefix || ''}`}
          className={`px-6 py-3 ${isActive(slugPrefix || 'catalog') ? 'bg-accent-light' : 'bg-secondary-muted hover:bg-accent-light transition-colors'} rounded-lg whitespace-nowrap text-xs`}
        >
          Все товары
        </Link>
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/catalog/${slugPrefix ? `${slugPrefix}/` : ''}${category.slug}`}
            className={`px-6 py-3 ${isActive(category.slug) ? 'bg-accent-light' : 'bg-secondary-muted hover:bg-accent-light transition-colors'} rounded-lg whitespace-nowrap text-xs`}
          >
            {category.name}
          </Link>
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