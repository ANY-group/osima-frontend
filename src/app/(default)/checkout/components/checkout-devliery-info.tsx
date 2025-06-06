'use client';

import { useContext } from "react";
import { CartContext } from "./controllers/cart-context";
import ErrorText from "@/app/components/ui/error-text";
import DeliveryMethodEntity from "@/lib/cart/types/delivery-method";

export default function CheckoutDeliveryInfo() {
  return (
    <>
      <DeliveryMethods />
      <DeliveryAddress />
    </>
  );
}

const DeliveryMethods = () => {
  const { deliveryMethods, error } = useContext(CartContext);

  return (
    <div className="my-6 md:my-14">
      <h5 className="mb-4 text-lg font-bold">
        Способ получения
      </h5>
      <div className="grid grid-cols-2 gap-4">
        {deliveryMethods.map((deliveryMethod, index) => (
          <DeliveryMethod
            key={index}
            deliveryMethod={deliveryMethod}
          />
        ))}
      </div>
      <ErrorText error={error?.errors.deliveryMethod} />
    </div>
  );
}

const DeliveryMethod = ({
  deliveryMethod,
}: {
  deliveryMethod: DeliveryMethodEntity,
}) => {
  const { cart, setCartInfo } = useContext(CartContext);

  return (
    <div>
      <input
        type="radio"
        name="delivery_method"
        id={`delivery-method-${deliveryMethod.slug}`}
        value={deliveryMethod.slug}
        className="sr-only peer"
        checked={cart.deliveryMethod == deliveryMethod.slug}
        onChange={(e) => setCartInfo('deliveryMethod', e.target.value)}
        required
      />
      <label
        htmlFor={`delivery-method-${deliveryMethod.slug}`}
        className="block h-full p-4 rounded-xl border-2
        border-divider-alt outline-success peer-checked:border-success peer-focus:outline cursor-pointer transition-all"
      >
        <p className="text-sm font-bold">
          {deliveryMethod.name}
        </p>
        <p className="mt-2 text-secondary text-xs">
          {deliveryMethod.description}
        </p>
      </label>
    </div>
  );
}

const DeliveryAddress = () => {
  const { cart, setCartInfo, error } = useContext(CartContext);

  return (
    <>
      <h5 className="my-4 text-lg font-bold">
        Адрес доставки
      </h5>
      {/* <select
        name="city"
        className="w-full p-3 rounded-lg border border-divider-alt"
        value={cart.cityId || ''}
        onChange={(e) => setCartInfo('cityId', e.target.value)}
        required
      >
        <option value="almaty">
          Алматы
        </option>
        <option value="astana">
          Астана
        </option>
      </select>
      <ErrorText error={error?.errors['address.cityId']} /> */}

      <input
        type="text"
        name="city"
        autoComplete="address-level2"
        placeholder="Город *"
        className="w-full p-1 pb-3 mt-4 border-b border-divider-alt focus:border-success user-invalid:border-danger transition-colors outline-0"
        value={cart.city || ''}
        onChange={(e) => setCartInfo('city', e.target.value)}
        maxLength={255}
        required
      />
      <ErrorText error={error?.errors['address.city']} />

      <input
        type="text"
        name="address"
        autoComplete="address-line1"
        placeholder="Адрес *"
        className="w-full p-1 pb-3 mt-4 border-b border-divider-alt focus:border-success user-invalid:border-danger transition-colors outline-0"
        value={cart.addressLine1 || ''}
        onChange={(e) => setCartInfo('addressLine1', e.target.value)}
        maxLength={255}
        required
      />
      <ErrorText error={error?.errors['address.addressLine1']} />

      <div className="flex flex-wrap gap-x-5">
        <div className="mt-4">
          <input
            type="text"
            name="address_line_2"
            autoComplete="address-line2"
            placeholder="Квартира / офис"
            className="p-1 pb-3 border-b border-divider-alt focus:border-success user-invalid:border-danger transition-colors outline-0"
            value={cart.addressLine2 || ''}
            onChange={(e) => setCartInfo('addressLine2', e.target.value)}
            maxLength={255}
          />
          <ErrorText error={error?.errors['address.addressLine2']} />
        </div>

        <div className="mt-4">
          <input
            type="text"
            name="postal_code"
            autoComplete="postal-code"
            placeholder="Индекс"
            className="p-1 pb-3 border-b border-divider-alt focus:border-success user-invalid:border-danger transition-colors outline-0"
            value={cart.postalCode || ''}
            onChange={(e) => setCartInfo('postalCode', e.target.value)}
            maxLength={255}
          />
          <ErrorText error={error?.errors['address.postalCode']} />
        </div>
      </div>
    </>
  );
}