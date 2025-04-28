'use client';

import Collapse from "@/app/components/ui/collapse";
import ArrowDownBoldIcon from "@/app/components/ui/icons/arrow-down-bold-icon";
import Image from "next/image";
import { useState } from "react";

export default function OrdersAccordion() {
  const [activeOrder, setActiveOrder] = useState<number | null>(null);

  const orders = [...Array(10)];
  const items = [...Array(2)];

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
              №9032
            </div>
            <div>
              11.04.2025
            </div>
            <p className="text-right font-bold">
              Отменен
            </p>
            <div className="col-span-3 pt-1 font-normal">
              {items.map((item, index) => (
                <OrderItem key={index} />
              ))}
            </div>
          </div>
          <Collapse open={isOrderOpen(index)}>
            <OrderInfoTable />
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

const OrderItem = () => {
  return (
    <div className="flex gap-2 my-2 p-2 rounded-xl bg-secondary-muted text-sm">
      <Image
        src="/images/tmp/product.png"
        alt="Product"
        width={100}
        height={100}
        className="object-contain w-15 h-15 aspect-square rounded-lg"
      />
      <div className="flex max-sm:flex-col items-start sm:items-center gap-1 w-full">
        <div className="flex-grow">
          <p className="text-secondary">
            Kylie Cosmetics
          </p>
          <p className="font-medium">
            KYLIE High Gloss 001 Crystal
          </p>
        </div>
        <div className="flex sm:flex-col sm:items-end justify-end max-sm:gap-3 font-semibold">
          <p className="whitespace-nowrap">
            17 000 C
          </p>
          <p className="whitespace-nowrap">
            2 шт.
          </p>
        </div>
      </div>
    </div>
  );
}

const OrderInfoTable = () => {
  return (
    <table className="my-2 w-full text-xs">
      <tbody>
        <TableRow label="Доставка" value="Курьером" />
        <TableRow label="Адрес доставки" value="г.Алматы, Абылай хана 98" />
        <TableRow label="Способ оплаты" value="Онлайн" />
        <TableRow label="Статус оплаты" value="Не оплачен" />
        <TableRow label="Общая стоимость" value="23 000 C" />
        <TableRow label="Стоимость доставки" value="800 C" />
        <TableRow label="Итого" value="23 800 C" bold />
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