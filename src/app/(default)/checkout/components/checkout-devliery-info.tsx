'use client';

import { ChangeEventHandler } from "react";

export default function CheckoutDeliveryInfo() {
  return (
    <>
      <DeliveryMethods />
      <DeliveryAddress />
    </>
  );
}

const DeliveryMethods = () => {
  return (
    <div className="my-6 md:my-14">
      <h5 className="mb-4 text-lg font-bold">
        Способ получения
      </h5>
      <div className="grid grid-cols-2 gap-4">
        <DeliveryMethod
          id="courier"
          name="Курьером"
          description="В удобный для Вас с день и интервал времени"
          isActive
        />
        <DeliveryMethod
          id="pickup"
          name="Самовывоз"
          description="Без ожидания курьера"
        />
      </div>
    </div>
  );
}

const DeliveryMethod = ({
  id,
  name,
  description,
  isActive = false,
}: {
  id: string,
  name: string,
  description: string,
  isActive?: boolean,
}) => {

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('changed:' + e.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        name="delivery_method"
        id={`delivery-method-${id}`}
        value={id}
        className="sr-only peer"
        checked={isActive}
        onChange={onChange}
        required
      />
      <label
        htmlFor={`delivery-method-${id}`}
        className="block h-full p-4 rounded-xl border-2
        border-divider-alt outline-success peer-checked:border-success peer-focus:outline cursor-pointer"
      >
        <p className="text-sm font-bold">
          {name}
        </p>
        <p className="mt-2 text-secondary text-xs">
          {description}
        </p>
      </label>
    </div>
  );
}

const DeliveryAddress = () => {

  const onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    console.log('changed:' + e.target.value);
  };

  return (
    <>
      <h5 className="my-4 text-lg font-bold">
        Адрес доставки
      </h5>
      <select
        name="city"
        className="w-full p-3 rounded-lg border border-divider-alt"
        value="almaty"
        onChange={onChange}
        required
      >
        <option value="almaty">
          Алматы
        </option>
        <option value="astana">
          Астана
        </option>
      </select>
      <input
        type="text"
        name="address"
        autoComplete="address-line1"
        placeholder="Адрес *"
        className="w-full p-1 pb-3 my-9 border-b border-divider-alt focus:border-success transition-colors outline-0"
        required
      />
      <div className="flex flex-wrap gap-5">
        <input
          type="text"
          name="address_line_2"
          autoComplete="address-line2"
          placeholder="Квартира / офис"
          className="p-1 pb-3 border-b border-divider-alt focus:border-success transition-colors outline-0"
        />
        <input
          type="text"
          name="postal_code"
          autoComplete="postal-code	"
          placeholder="Индекс"
          className="p-1 pb-3 border-b border-divider-alt focus:border-success transition-colors outline-0"
        />
      </div>
    </>
  );
}