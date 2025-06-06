'use client';

import OrderEntity from "../types/order";
import fetchPaymentUrl from "./fetch-payment-url";

export default async function startPayment(order: OrderEntity): Promise<void> {
  const paymentResult = await fetchPaymentUrl(order);

  window.location.href = paymentResult.redirectUrl;
}