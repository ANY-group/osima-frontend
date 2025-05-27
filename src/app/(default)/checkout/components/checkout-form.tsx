'use client';

import { FormEventHandler, useContext, useState } from "react";
import CheckoutAdditionalInfo from "./checkout-additional-info";
import CheckoutDeliveryInfo from "./checkout-devliery-info";
import CheckoutPaymentInfo from "./checkout-payment-info";
import CheckoutUserInfo from "./checkout-user-info";
import { CartContext } from "./controllers/cart-context";
import createOrder from "@/lib/cart/usecases/create-order";
import ValidationError from "@/lib/exceptions/validation-error";

export default function CheckoutForm() {

  const { cart, setError } = useContext(CartContext);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);
    try {
      const order = await createOrder(cart);
      console.log(order);
    } catch (e) {
      if (e instanceof ValidationError) {
        setError(e);
      }
    }
    setLoading(true);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="max-w-md">
        <CheckoutUserInfo />
      </div>
      <CheckoutDeliveryInfo />
      <div className="max-w-md">
        <CheckoutPaymentInfo />
        <CheckoutAdditionalInfo />
        <div className="my-7 md:my-9">
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-success text-center text-success-foreground text-xs font-bold uppercase"
            disabled={isLoading}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </form>
  );
}