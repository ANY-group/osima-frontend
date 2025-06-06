import api from "@/lib/utils/api";
import PaymentMethodEntity from "../types/payment-method";

export default async function fetchPaymentMethods(deliveryType?: string): Promise<Array<PaymentMethodEntity>> {
  const res = await api.request(`payment/methods?deliveryType=${deliveryType || ''}`);

  const { paymentMethods } = await res.json();

  return paymentMethods;
}