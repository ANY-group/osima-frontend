import ProductPrice from "@/app/(default)/catalog/components/product-price";
import StarRating from "@/app/(default)/catalog/components/star-rating";
import CheckIcon from "@/app/components/ui/icons/check-icon";
import Image from "next/image";
import Link from "@/app/components/ui/link";
import { ProductEntity } from "@/lib/catalog/types/product";
import { BrandEntity } from "@/lib/catalog/types/brand";
import ProductAddToCartButton from "./product-add-to-cart-button";
import ProductAddToFavoritesButton from "./product-add-to-favorites-button";
import TimesIcon from "@/app/components/ui/icons/times-icon";

export default function ProductInfo({ product }: {
  product: ProductEntity,
}) {
  return (
    <div className="grid sm:grid-cols-2 sm:gap-6">
      <ProductLeftBlock product={product} />
      <ProductRightBlock product={product} />
    </div>
  );
}

const ProductLeftBlock = ({ product }: {
  product: ProductEntity,
}) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-3 sm:py-5">
      <ProductImages product={product} />
      {product.brand && (
        <div className="sm:ml-16 md:ml-27">
          <ProductBrand brand={product.brand} />
        </div>
      )}
    </div>
  );
}

const ProductImages = ({ product }: {
  product: ProductEntity,
}) => {

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-2 md:gap-13">
      <div className="flex flex-col gap-1 min-w-15">
        {product.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={product.name}
            width={60}
            height={60}
            className={`aspect-square object-contain border p-1 rounded-lg ${true && 'border-success'}`}
          />
        ))}
      </div>
      <div className="flex flex-grow gap-4 max-sm:p-4 max-sm:-mx-4 overflow-x-auto no-scrollbar">
        {product.images.map((image, index) => (
          <div key={index} className="w-full shrink-0">
            <Image
              src={image}
              alt={product.name}
              width={500}
              height={500}
              className="mx-auto sm:max-w-125 w-full object-cover aspect-square"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const ProductBrand = ({ brand }: {
  brand: BrandEntity,
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Link href={`/catalog/brands/${brand.slug}`} className="text-sm text-text-accent">
        Все товары бренда <span className="text-success font-semibold uppercase">{brand.name}</span>
      </Link>
      <Link href={`/catalog/brands/${brand.slug}`}>
        {brand.image ? (
          <Image
            src={brand.image}
            alt={brand.name}
            width={110}
            height={110}
            className="object-contain"
          />
        ) : (
          <p className="text-2xl mt-2">
            {brand.name}
          </p>
        )}
      </Link>
    </div>
  );
}

const ProductRightBlock = ({ product }: {
  product: ProductEntity,
}) => {
  return (
    <div className="flex flex-col gap-10 overflow-auto">
      <ProductMainInfo product={product} />
      <ProductDescription product={product} />
    </div>
  );
}

const ProductMainInfo = ({ product }: {
  product: ProductEntity,
}) => {
  return (
    <div className="flex flex-col gap-5">

      <div className="flex flex-col gap-2 pt-4">
        <p className="text-sm font-semibold">
          {product.subcategory.name}
        </p>
        <h1 className="text-2xl md:text-3xl">
          {product.name}
        </h1>
      </div>

      <div className="flex gap-7">
        <StarRating />
        <div className="flex items-center gap-1 text-sm">
          {
            (product.quantity > 0) ? (
              <span className="contents text-accent-green">
                <CheckIcon /> Есть в наличии
              </span>
            ) : (
              <span className="contents text-danger">
                <TimesIcon /> Нет в наличии
              </span>
            )
          }
        </div>
      </div>

      <div className="text-2xl pt-1">
        <ProductPrice price={product.price} />
      </div>

      <div className="sm:max-w-3xs px-6 py-4 bg-secondary-muted rounded-lg text-xs">
        <p>
          Вам начислится 990 бонусов
          (10%) при покупке с регистрации
        </p>
        <Link href="#" className="text-on-primary-muted">
          Подробнее о бонусах
        </Link>
      </div>

      <div className="flex max-sm:justify-between gap-2 h-10">
        <ProductAddToCartButton product={product} />
        <ProductAddToFavoritesButton product={product} />
      </div>

      <div className="text-sm text-text-secondary">
        <p className="mb-1.5">
          Бесплатная доставка от 20 000 тг.
        </p>
        <Link href="#" className="text-on-primary-muted">
          Подробнее про условия доставки
        </Link>
      </div>
    </div>
  );
}

const ProductDescription = ({ product }: {
  product: ProductEntity,
}) => {
  return (
    <div>
      <div className="overflow-x-auto no-scrollbar flex items-center gap-2 border-b border-divider">
        <TabButton isActive={true}>
          Описание
        </TabButton>
        <TabButton>
          Характеристики
        </TabButton>
        <TabButton>
          Оплата и доставка
        </TabButton>
      </div>
      {product.description && (
        <div
          className="raw-content pt-5 text-sm line-clamp-5"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      )}
      <button type="button" className="mt-2 text-sm font-semibold text-on-primary-muted">
        Читать дальше
        {/* Свернуть */}
      </button>
    </div>
  );
}

const TabButton = ({ children, isActive = false }: {
  children: React.ReactNode,
  isActive?: boolean,
}) => {
  return (
    <button
      type="button"
      className={`inline-block px-2 pb-2 border-on-primary-muted whitespace-nowrap text-sm font-medium ${isActive ? 'border-b-3' : 'mb-0.75'}`}
    >
      {children}
    </button>
  );
}