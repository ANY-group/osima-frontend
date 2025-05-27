'use client';

import { useContext } from "react";
import { CartContext } from "./controllers/cart-context";

export default function CheckoutAdditionalInfo() {
  return (
    <div className="my-9">
      <h5 className="mb-4 text-lg font-bold">
        Дополнительно
      </h5>
      <CertificateInfo />
      <Comment />
    </div>
  );
}

const CertificateInfo = () => {
  const { cart, setCartInfo } = useContext(CartContext);

  return (
    <label className="flex items-center gap-4 px-6 min-h-22 rounded-xl border-2 border-divider-alt cursor-pointer">
      <input
        type="checkbox"
        name="use_certificate"
        value="use_certificate"
        className="sr-only peer"
        checked={cart.useCertificate || false}
        onChange={(e) => setCartInfo('useCertificate', e.target.checked)}
      />
      <div className="relative w-11 h-6 bg-gray-200 outline-success peer-focus:outline rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
      <p className="text-sm">
        У меня есть подарочный сертификат
      </p>
    </label>
  );
}

const Comment = () => {
  const { cart, setCartInfo } = useContext(CartContext);

  return (
    <div className="mt-14 mb-9">
      <h5 className="mb-4 text-lg font-bold">
        Комментарий к заказу
      </h5>
      <textarea
        name="comment"
        placeholder="Введите здесь комментарий..."
        className="w-full p-1 pb-3 border-b border-divider-alt focus:border-success transition-colors outline-0"
        value={cart.comment || ''}
        onChange={(e) => setCartInfo('comment', e.target.value)}
      />
    </div>
  );
}