'use client';

import Collapse from "@/app/components/ui/collapse";
import ArrowDownBoldIcon from "@/app/components/ui/icons/arrow-down-bold-icon";
import { OrderEntity } from "@/lib/order/types/order";
import { OrderItemEntity } from "@/lib/order/types/order-item";
import { formatNumber } from "@/lib/utils/helpers";
import Image from "next/image";
import { useState } from "react";

export default function OrdersAccordion({ orders }: {
  orders: Array<OrderEntity>,
}) {
  const [activeOrder, setActiveOrder] = useState<number | null>(null);


  const isOrderOpen = (index: number): boolean => {
    return index === activeOrder;
  };

  return (
    <div>
      {orders.map((order, index) => (
        <div
          key={index}
          className="pt-7 pb-5 border-b border-divider"
        >
          <div className="grid grid-cols-3 font-medium text-sm">
            <div>
              №{order.id}
            </div>
            <div>
              {order.createdAt}
            </div>
            <p className="text-right font-bold">
              {order.status || '?'}
            </p>
            <div className="col-span-3 pt-1 font-normal">
              {order.items.map((item, index) => (
                <OrderItem
                  key={index}
                  item={item}
                />
              ))}
            </div>
          </div>
          <Collapse open={isOrderOpen(index)}>
            <OrderInfoTable order={order} />
          </Collapse>
          <div className="text-right">
            <button
              onClick={() => setActiveOrder(isOrderOpen(index) ? null : index)}
              className="inline-flex items-center text-success font-bold text-sm"
            >
              {isOrderOpen(index) ? 'Скрыть' : 'Подробнее'}
              <div className={`transition-transform ${isOrderOpen(index) && 'rotate-180 '}`}>
                <ArrowDownBoldIcon />
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const OrderItem = ({ item }: {
  item: OrderItemEntity,
}) => {
  return (
    <div className="flex gap-2 my-2 p-2 rounded-xl bg-secondary-muted text-sm">
      {item.product && (
        <Image
          src={item.product.image}
          alt={item.description}
          width={100}
          height={100}
          className="object-contain w-15 h-15 aspect-square rounded-lg"
        />
      )}
      <div className="flex max-sm:flex-col items-start sm:items-center gap-1 w-full">
        <div className="flex-grow">
          {item.product && (
            <p className="text-secondary">
              {item.product.subcategory?.name}
            </p>
          )}
          <p className="font-medium">
            {item.description}
          </p>
        </div>
        <div className="flex sm:flex-col sm:items-end justify-end max-sm:gap-3 font-semibold">
          <p className="whitespace-nowrap">
            {formatNumber(item.price)} C
          </p>
          <p className="whitespace-nowrap">
            {formatNumber(item.quantity)} шт.
          </p>
        </div>
      </div>
    </div>
  );
}

const OrderInfoTable = ({ order }: {
  order: OrderEntity
}) => {
  return (
    <table className="my-2 w-full text-xs">
      <tbody>
        <TableRow label="Доставка" value={order.delivery.name} />
        <TableRow label="Адрес доставки" value={order.delivery.address} />
        <TableRow label="Способ оплаты" value={order.isCashPayment ? "Наличными" : "Онлайн"} />
        <TableRow label="Статус оплаты" value={order.isPaid ? "Оплачен" : "Не оплачен"} />
        <TableRow label="Общая стоимость" value={formatNumber(order.subtotal) + ' C'} />
        <TableRow label="Стоимость доставки" value={formatNumber(order.deliveryCost) + ' C'} />
        <TableRow label="Итого" value={formatNumber(order.total) + ' C'} bold />
      </tbody>
    </table>
  );
}

const TableRow = ({ label, value, bold = false }: {
  label: string,
  value: string,
  bold?: boolean,
}) => {
  return (
    <tr className={`border-b border-divider ${bold && 'font-bold'}`}>
      <td className="py-3">
        {label}
      </td>
      <td className="py-3">
        {value}
      </td>
    </tr>
  );
}