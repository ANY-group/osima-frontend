import ProductPrice from "@/app/(default)/catalog/components/product-price";
import StarRating from "@/app/(default)/catalog/components/star-rating";
import CheckIcon from "@/app/components/ui/icons/check-icon";
import HeartOutlinedIcon from "@/app/components/ui/icons/heart-outlined-icon";
import ShoppingBagIcon from "@/app/components/ui/icons/shopping-bag-icon";
import Image from "next/image";
import Link from "@/app/components/ui/link";

export default function ProductInfo() {
  return (
    <div className="grid sm:grid-cols-2 sm:gap-6">
      <ProductLeftBlock />
      <ProductRightBlock />
    </div>
  );
}

const ProductLeftBlock = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-3 sm:py-5">
      <ProductImages />
      <div className="sm:ml-16 md:ml-27">
        <ProductBrand />
      </div>
    </div>
  );
}

const ProductImages = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-2 md:gap-13">
      <div className="flex flex-col gap-1">
        <Image
          src="/images/tmp/product.png"
          alt="Product"
          width={56}
          height={56}
          className="aspect-square object-contain border border-success rounded-lg"
        />
      </div>
      <div className="flex-grow">
        <div className="relative max-w-2/3 sm:max-w-125 mx-auto aspect-square">
          <Image
            src="/images/tmp/product.png"
            alt="Product"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

const ProductBrand = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Link href="/catalog/brands/klairs" className="text-sm text-text-accent">
        Все товары бренда <span className="text-success">KLAIRS</span>
      </Link>
      <Link href="/catalog/brands/klairs">
        <Image
          src="/images/tmp/klairs.png"
          alt="Klairs"
          width={110}
          height={110}
          className="object-contain"
        />
      </Link>
    </div>
  );
}

const ProductRightBlock = () => {
  return (
    <div className="flex flex-col gap-10 overflow-auto">
      <ProductMainInfo />
      <ProductDescription />
    </div>
  );
}

const ProductMainInfo = () => {
  return (
    <div className="flex flex-col gap-5">

      <div className="flex flex-col gap-2 pt-4">
        <p className="text-sm font-semibold">
          Увлажняющий крем для лица
        </p>
        <h1 className="text-2xl md:text-3xl">
          AESTURA Atobarrier365 hydro soothing cream
        </h1>
      </div>

      <div className="flex gap-7">
        <StarRating />
        <div className="flex items-center gap-1 text-sm text-accent-green">
          <CheckIcon /> Есть в наличии
        </div>
      </div>

      <div className="text-2xl pt-1">
        <ProductPrice />
      </div>

      <div className="max-w-3xs px-6 py-4 bg-secondary-muted rounded-lg text-xs">
        <p>
          Вам начислится 990 бонусов
          (10%) при покупке с регистрации
        </p>
        <Link href="#" className="text-on-primary-muted">
          Подробнее о бонусах
        </Link>
      </div>

      <div className="flex gap-2 h-10">
        <button className="flex-grow flex items-center justify-center gap-2 h-full max-w-3xs rounded-lg bg-success text-sm  text-white">
          <ShoppingBagIcon />
          Добавить в корзину
        </button>
        <button className="flex items-center justify-center h-full aspect-square rounded-lg bg-secondary-muted" aria-label="Добавить в избранные">
          <HeartOutlinedIcon />
        </button>
      </div>

      <div className="text-sm text-text-secondary">
        <p className="mb-1.5">
          Бесплатная доставка от 20 000 тг.
        </p>
        <Link href="#">
          Подробнее про условия доставки
        </Link>
      </div>
    </div>
  );
}

const ProductDescription = () => {
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
      <div className="raw-content pt-5 text-sm line-clamp-5">
        Глубокоувлажняющий тоник с экстрактом зеленого чая моментально
        успокоит и восстановит оптимальный рН баланс кожи.
        Антиоксиданты защищают кожу от воздействия свободных
        радикалов. Тоник подготовит кожу к дальнейшим уходовым ритуалам.
        Средство подходит для всех типов кожи.
      </div>
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