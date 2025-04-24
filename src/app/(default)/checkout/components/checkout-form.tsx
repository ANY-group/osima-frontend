'use client';

import { FormEventHandler } from "react";
import CheckoutAdditionalInfo from "./checkout-additional-info";
import CheckoutDeliveryInfo from "./checkout-devliery-info";
import CheckoutPaymentInfo from "./checkout-payment-info";
import CheckoutUserInfo from "./checkout-user-info";

export default function CheckoutForm() {

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log([...formData]);
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
        <CheckoutButton />
      </div>
    </form>
  );
}

const CheckoutButton = () => {
  return (
    <div className="my-7 md:my-9">
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-success text-center text-success-foreground text-xs font-bold uppercase"
      >
        Оформить заказ
      </button>
    </div>
  );
}
