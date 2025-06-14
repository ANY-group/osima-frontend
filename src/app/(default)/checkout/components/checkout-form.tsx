'use client';

import { FormEventHandler, useContext, useState } from "react";
import CheckoutAdditionalInfo from "./checkout-additional-info";
import CheckoutDeliveryInfo from "./checkout-devliery-info";
import CheckoutPaymentInfo from "./checkout-payment-info";
import CheckoutUserInfo from "./checkout-user-info";
import { CartContext } from "./controllers/cart-context";
import createOrder from "@/lib/cart/usecases/create-order";
import ValidationError from "@/lib/exceptions/validation-error";
import startPayment from "@/lib/order/usecases/start-payment";

export default function CheckoutForm() {

  const { cart, setError } = useContext(CartContext);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // TODO: add captcha

    setError(null);
    setLoading(true);
    try {
      const order = await createOrder(cart);
      if (order.canPay && !order.isCashPayment) {
        // TODO: clear cart
        await startPayment(order);
      } else {
        // TODO: show order created modal
        // router.replace('/profile/orders');
      }

    } catch (e) {
      if (e instanceof ValidationError) {
        if (e?.errors.items) {
          alert(e?.errors.items);
        }
        setError(e);
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="sm:max-w-md">
        <CheckoutUserInfo />
      </div>
      <CheckoutDeliveryInfo />
      <div className="sm:max-w-md">
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