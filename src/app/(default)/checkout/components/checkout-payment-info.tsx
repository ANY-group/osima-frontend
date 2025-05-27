'use client';

import CardIcon from "@/app/components/ui/icons/card-icon";
import CashIcon from "@/app/components/ui/icons/cash-icon";
import { useContext } from "react";
import { CartContext } from "./controllers/cart-context";
import { PaymentMethodEntity } from "@/lib/cart/types/payment-method";

export default function CheckoutPaymentInfo() {
  const { paymentMethods } = useContext(CartContext);

  return (
    <div className="my-6 md:my-14">
      <h5 className="mb-4 text-lg font-bold">
        Способ оплаты
      </h5>
      <div className="flex flex-col gap-2">
        {paymentMethods.map((paymentMethod, index) => (
          <PaymentMethod
            key={index}
            paymentMethod={paymentMethod}
          />
        ))}
      </div>
    </div>
  );
}

const PaymentMethod = ({
  paymentMethod,
}: {
  paymentMethod: PaymentMethodEntity,
}) => {
  const { cart, setCartInfo } = useContext(CartContext);

  return (
    <label className="flex items-center gap-4 px-6 py-4 min-h-20 rounded-xl border-2 border-divider-alt">
      <input
        type="radio"
        name="payment_method"
        value={paymentMethod.slug}
        checked={cart.paymentMethod == paymentMethod.slug}
        onChange={(e) => setCartInfo('paymentMethod', e.target.value)}
        required
      />
      <div className="w-full">
        <p className="text-sm font-medium">
          {paymentMethod.name}
        </p>
        {paymentMethod.description && (
          <p className="text-secondary text-xs max-w-60">
            {paymentMethod.description}
          </p>
        )}
      </div>
      {paymentMethod.type == 'cash' && (
        <CashIcon />
      )}
      {paymentMethod.type == 'online' && (
        <CardIcon />
      )}
    </label>
  );
}