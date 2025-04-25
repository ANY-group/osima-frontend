import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image";
import ProductPrice from "../(default)/catalog/components/product-price";
import ProductCashback from "../(default)/catalog/components/product-cashback";
import MinusIcon from "./ui/icons/minus-icon";
import PlusIcon from "./ui/icons/plus-icon";
import TimesIcon from "./ui/icons/times-icon";
import TimesAltIcon from "./ui/icons/times-alt-icon";
import Link from "next/link";
import CartInfoTable from "../(default)/checkout/components/cart-info-table";
import CartEmpty from "../(default)/checkout/components/cart-empty";

export default function DesktopCartPopover({ isOpen, close }: {
  isOpen: boolean,
  close: () => void,
}) {
  return (
    <div className="max-md:hidden relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            className="absolute top-4 right-0 p-7.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
          >
            <div className="relative w-125 rounded-xl bg-white drop-shadow-2xl border border-divider/50">
              <Triangle />
              <Cart />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Cart = () => {
  const items = [...Array(4)];
  return (
    <div className="flex flex-col divide-y divide-divider max-h-125">
      <div className="flex-grow overflow-auto">
        {items.map((item, index) => (
          <CartItem key={index} />
        ))}
      </div>
      <div className="p-4">
        <div className="mb-4">
          <CartInfoTable />
        </div>
        <Link
          href="/checkout"
          className="block p-3 w-full rounded-xl bg-success text-success-foreground text-center text-xs font-bold uppercase"
        >
          Оформить заказ
        </Link>
      </div>
    </div>
  );
}

const CartItem = () => {
  return (
    <div className="group flex gap-3 m-8 ml-2">
      <Image
        src="/images/tmp/product.png"
        alt="Product"
        width={100}
        height={100}
        className="object-contain w-25 h-25 aspect-square"
      />
      <div>
        <div className="flex items-start justify-between gap-3">
          <Link href="/catalog/category/subcategory/product" onClick={close}>
            <p className="text-sm font-semibold">
              Увлажняющий крем для лица
            </p>
            <p className="mt-2 leading-tight">
              AESTURA Atobarrier365 hydro soothing cream
            </p>
          </Link>
          <div className="flex items-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              className="flex items-center justify-center h-8 w-8 rounded-lg bg-secondary-muted"
              aria-label="Уменьшить количество товара в корзине"
            >
              <MinusIcon />
            </button>
            <span className="font-semibold">
              1
            </span>
            <button
              className="flex items-center justify-center h-8 w-8 rounded-lg bg-secondary-muted"
              aria-label="Увеличить количество товара в корзине"
            >
              <PlusIcon />
            </button>
            <button aria-label="Удалить товар из корзины">
              <TimesAltIcon />
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <ProductCashback />
          <ProductPrice alt />
        </div>
      </div>
    </div>
  );
}

const Triangle = () => {
  return (
    <div className="absolute -top-7 right-20 w-0 h-0 border-14 drop-shadow-2xl border-solid border-transparent border-b-white"></div>
  );
}