import { BrandEntity } from "@/lib/catalog/types/brand";
import Image from "next/image";

export default function BrandDescription({ brand }: {
  brand: BrandEntity,
}) {
  return (
    <div className="pb-8 mt-4">
      {brand.image ? (
        <Image
          src={brand.image}
          alt={brand.name}
          width={280}
          height={140}
          className="mx-auto max-w-70 max-h-30 object-contain rounded-lg mix-blend-multiply"
        />
      ) : (
        <h1 className="text-center text-4xl font-bold">
          {brand.name}
        </h1>
      )}
      <div
        className="md:max-w-2/3 mx-auto text-center mt-4 raw-html"
        dangerouslySetInnerHTML={{ __html: brand.description || '' }}
      ></div>
    </div>
  );
}