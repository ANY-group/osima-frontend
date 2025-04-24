'use client';

import CardIcon from "@/app/components/ui/icons/card-icon";
import CashIcon from "@/app/components/ui/icons/cash-icon";
import { ChangeEventHandler } from "react";

export default function CheckoutPaymentInfo() {
  return (
    <div className="my-6 md:my-14">
      <h5 className="mb-4 text-lg font-bold">
        Способ оплаты
      </h5>
      <div className="flex flex-col gap-2">
        <PaymentMethod
          id="online"
          name="Картой онлайн"
          icon={<CardIcon />}
          isActive
        />
        <PaymentMethod
          id="invoice"
          name="Счет на оплату - kaspi.kz"
          description="Мы выставим счет на оплату, вы можете отплатить его в приложении."
        />
        <PaymentMethod
          id="cash"
          name="Наличными"
          icon={<CashIcon />}
        />
      </div>
    </div>
  );
}

const PaymentMethod = ({
  id,
  name,
  description,
  icon,
  isActive = false,
}: {
  id: string,
  name: string,
  icon?: React.ReactNode,
  description?: string,
  isActive?: boolean,
}) => {

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('changed:' + e.target.value);
  };

  return (
    <label className="flex items-center gap-4 px-6 py-4 min-h-20 rounded-xl border-2 border-divider-alt">
      <input
        type="radio"
        name="payment_method"
        value={id}
        checked={isActive}
        onChange={onChange}
        required
      />
      <div className="w-full">
        <p className="text-sm font-medium">
          {name}
        </p>
        {description && (
          <p className="text-secondary text-xs max-w-60">
            {description}
          </p>
        )}
      </div>
      {icon}
    </label>
  );
}