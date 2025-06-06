import OrderDeliveryEntity from "./order-delivery";
import OrderItemEntity from "./order-item";

export default interface OrderEntity {
  id: number,
  status: string|null,
  deliveryCost: number,
  subtotal: number,
  total: number,
  isPaid: boolean,
  canPay: boolean,
  isCashPayment: boolean,
  createdAt: string,
  delivery: OrderDeliveryEntity,
  items: Array<OrderItemEntity>,
}