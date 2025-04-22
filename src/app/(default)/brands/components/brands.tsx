import Image from "next/image";
import Link from "next/link";

export default function Brands() {
  const filters = [...'abcdefghijklmnopqrstuvwxyz'.split(''), '0-9', 'а-я'];
  const brands = [...Array(10)];

  return (
    <div>
      {filters.map((filter, index) => (
        <div key={index} className="mt-6 md:mt-8">
          <h2 id={`group-${index}`} className="text-xl font-bold uppercase py-3 scroll-mt-40">
            {filter}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 md:gap-6 gap-y-10 py-6 md:py-8 border-t border-divider">
            {brands.map((brand, index) => (
              <Brand
                key={index}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const Brand = () => {
  return (
    <Link
      href="/brands/brand"
      className=""
    >
      <div className="flex items-center justify-center min-h-30 rounded-xl bg-secondary-muted">
        <Image
          src="/images/tmp/brand.png"
          alt="Brand"
          width={200}
          height={100}
          className="object-contain mx-auto mix-blend-multiply"
        />

      </div>
      <p className="mt-3 text-center text-sm font-bold">
        A&apos;PIEU
      </p>
    </Link>
  );
}