import ArrowLeftAltIcon from "@/app/components/ui/icons/arrow-left-alt-icon";
import { BreadcrumbLinks, LinkEntity } from "./breadcrumbs";

export default function Subheader({ title, children, breadcrumbs = [] }: {
  title: string,
  children?: React.ReactNode,
  breadcrumbs?: Array<LinkEntity>,
}) {
  return (
    <div className="flex items-center justify-center pb-3 md:py-4">
      <div className="flex items-center justify-start gap-10 w-full">
        <div className="flex items-center justify-start gap-px md:gap-1 text-xs font-bold uppercase">
          <ArrowLeftAltIcon />
          Назад
        </div>
        <div className="hidden xl:block overflow-hidden max-w-sm [&_*]:text-secondary">
          <BreadcrumbLinks items={breadcrumbs} />
        </div>
      </div>
      <h1 className="text-xl font-medium whitespace-nowrap">
        {title}
      </h1>
      <div className="text-right w-full font-medium">
        {children}
      </div>
    </div>
  );
}