import ArrowLeftAltIcon from "@/app/components/ui/icons/arrow-left-alt-icon";

export default function CatalogHeader({ title, children }: {
  title: string,
  children?: React.ReactNode,
}) {
  return (
    <div className="flex items-center justify-center pb-3 md:py-4">
      <div className="flex items-center justify-start gap-px md:gap-1 w-full text-xs font-bold uppercase">
        <ArrowLeftAltIcon />
        Назад
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