import api from "@/lib/utils/api";
import { PaymentMethodEntity } from "../types/payment-method";

export default async function fetchPaymentMethods(): Promise<Array<PaymentMethodEntity>> {
  const res = await api.request('payment/methods');

  if (!res.ok) {
    return [];
  }

  const { paymentMethods } = await res.json();

  return paymentMethods;
}