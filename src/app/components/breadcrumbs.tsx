import Link from "next/link";
import ArrowLeftAltIcon from "./ui/icons/arrow-left-alt-icon";
import BackButton from "./ui/back-button";

export type LinkEntity = {
  label: string,
  href: string | null,
};

export default function Breadcrumbs({ items }: { items: Array<LinkEntity> }) {
  return (
    <div className="hidden md:flex items-center gap-10 py-5 text-secondary text-sm overflow-auto no-scrollbar">
      <BackButton className="flex items-center text-xs font-semibold uppercase text-text-accent">
        <ArrowLeftAltIcon />
        Назад
      </BackButton>
      <div className="overflow-hidden">
        <BreadcrumbLinks items={items} />
      </div>
    </div>
  );
}

export function BreadcrumbLinks({ items }: { items: Array<LinkEntity> }) {
  return (
    <div className="flex items-center">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className={`${!index && 'hidden'} w-4 h-px mx-2 bg-[#EBEDF0]`}></div>
          <Link
            href={item.href || '#'}
            className={`whitespace-nowrap ${item.href == null && 'text-text-accent'}`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
}