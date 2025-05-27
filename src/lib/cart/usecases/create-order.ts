import { OrderEntity } from "@/lib/order/types/order";
import { CartEntity } from "../types/cart";
import api from "@/lib/utils/api";

export default async function createOrder(cart: CartEntity): Promise<OrderEntity> {
  console.log(cart);

  const res = await api.request('orders', 'POST', {
    items: cart.items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    })),
    deliveryMethod: cart.deliveryMethod,
    paymentMethod: cart.paymentMethod,
    useCertificate: cart.useCertificate,
    comment: cart.comment,
    user: {
      phone: cart.phone,
      name: cart.name,
      email: cart.email,
    },
    address: {
      city: cart.city,
      addressLine1: cart.addressLine1,
      addressLine2: cart.addressLine2,
      postalCode: cart.postalCode,
    },
  });

  const { order } = await res.json();

  return order;
}