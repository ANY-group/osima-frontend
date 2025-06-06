import Image from "next/image";
import Link from "@/app/components/ui/link";
import fetchBrands from "@/lib/catalog/usecases/fetch-brands";
import BrandEntity from "@/lib/catalog/types/brand";

export default async function Brands() {
  const brands = await fetchBrands();
  const filters = [...'abcdefghijklmnopqrstuvwxyz'.split(''), '0-9', 'а-я'];

  const groupedBrands = brands.reduce<{ [key: string]: Array<BrandEntity> }>((acc, brand) => {
    let key = brand.name[0].toLowerCase();

    if (key >= '0' && key <= '9') {
      key = '0-9';
    } else if (key >= 'а' && key <= 'я') {
      key = 'а-я';
    }

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(brand);
    return acc;
  }, {});

  return (
    <div>
      {filters.map((filter, index) => (
        <div key={index} className="mt-6 md:mt-8">
          <h2 id={`group-${index}`} className="text-xl font-bold uppercase py-3 scroll-mt-40">
            {filter}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-6 gap-y-10 py-6 md:py-8 border-t border-divider">
            {(groupedBrands[filter] || []).map((brand, index) => (
              <Brand
                key={index}
                brand={brand}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const Brand = ({ brand }: {
  brand: BrandEntity,
}) => {
  return (
    <Link
      href={`/catalog/brands/${brand.slug}`}
      className=""
    >
      <div className="flex items-center justify-center min-h-30 rounded-xl bg-secondary-muted">
        {brand.image ? (
          <Image
            src={brand.image}
            alt={brand.name}
            width={200}
            height={100}
            className="object-contain mx-auto mix-blend-multiply"
          />
        ) : (
          <p className="text-3xl font-bold text-center">
            {brand.name}
          </p>
        )}
      </div>
      <p className="mt-3 text-center text-sm font-bold">
        {brand.name}
      </p>
    </Link>
  );
}