'use client';

import { AnimatePresence, motion } from "framer-motion"
import Link from "@/app/components/ui/link";
import CartInfoTable from "./cart-info-table";
import CartItem from "./cart-item";
import CartEmpty from "./cart-empty";
import { useContext } from "react";
import { CartContext } from "./cart-context";

export default function DesktopCartPopover({ isOpen }: {
  isOpen: boolean,
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
  const { cart } = useContext(CartContext);

  if (cart.items.length == 0) {
    return <CartEmpty />
  }

  return (
    <div className="flex flex-col divide-y divide-divider max-h-125">
      <div className="overflow-y-auto">
        {cart.items.map((item, index) => (
          <CartItem
            key={index}
            item={item}
          />
        ))}
      </div>
      <div className="p-5">
          <CartInfoTable />
        <Link
          href="/checkout"
          className="block p-3 mt-4 w-full rounded-xl bg-success text-success-foreground text-center text-xs font-bold uppercase"
        >
          Оформить заказ
        </Link>
      </div>
    </div>
  );
}

const Triangle = () => {
  return (
    <div className="absolute -top-7 right-20 w-0 h-0 border-14 drop-shadow-2xl border-solid border-transparent border-b-white"></div>
  );
}