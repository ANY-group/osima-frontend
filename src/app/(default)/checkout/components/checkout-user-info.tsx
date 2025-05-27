'use client';

import { AuthContext } from "@/app/(footerless)/profile/components/auth-context";
import { isValidMask, maskString } from "@/lib/utils/helpers";
import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { CartContext } from "./cart-context";
import authenticateByCode from "@/lib/auth/usecases/authenticate-by-code";
import getVerificationCode from "@/lib/auth/usecases/get-verification-code";
import { ValidationError } from "@/lib/catalog/types/validation-error";

export default function CheckoutUserInfo() {
  const { user, login } = useContext(AuthContext);
  const { cart, setCartInfo } = useContext(CartContext);
  const [errors, setErrors] = useState<ValidationError | null>(null);

  const [isCodeSent, setCodeSent] = useState<boolean>(false);

  const requestVerificationCode = async (phone?: string) => {
    setErrors(null);
    const errors = await getVerificationCode(phone || cart.phone!);

    if (errors == null) {
      setCodeSent(true);
    } else {
      setErrors(errors);
    }
  };

  const authenticate = async (code: string) => {
    if (code.length != 4) {
      return;
    }

    setErrors(null);
    const tokenOrErrors = await authenticateByCode(cart.phone!, code);

    if (typeof tokenOrErrors === 'string') {
      await login(tokenOrErrors);
      setCodeSent(false);
      return;
    }

    setErrors(tokenOrErrors);
  };

  return (
    <div className="mb-6 md:mb-14">
      <h5 className="mb-4 text-lg font-bold">
        Ваши данные
      </h5>
      <div className="relative flex items-center w-full">
        <PhoneInput
          phone={cart.phone || user?.phone || ''}
          onChange={(value) => setCartInfo('phone', value)}
          onSubmit={(phone) => requestVerificationCode(phone)}
        />
        {!user && (
          <button
            type="button"
            className="absolute right-0 text-success font-semibold outline-0 mb-3"
            onClick={() => requestVerificationCode()}
          >
            Получить код
          </button>
        )}
      </div>
      {isCodeSent && (
        <p className="text-right text-xs sm:text-sm text-secondary my-1">
          Получить новый код можно через 00:58
        </p>
      )}
      {errors?.errors.phone && (
        <p className="text-danger text-xs sm:text-sm my-1">
          {errors?.errors.phone}
        </p>
      )}
      {!user && isCodeSent && (
        <>
          <input
            type="text"
            name="code"
            placeholder="Введите код *"
            className="w-full p-1 pb-3 border-b border-divider-alt focus:border-success transition-colors outline-0"
            required
            autoFocus
            onChange={(e) => authenticate(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
          />
          {errors?.errors.code && (
            <p className="text-danger text-xs sm:text-sm my-1">
              {errors?.errors.code}
            </p>
          )}
        </>
      )}
      <input
        type="text"
        name="name"
        autoComplete="given-name"
        placeholder="ФИО *"
        className="w-full p-1 pb-3 mt-9 border-b border-divider-alt focus:border-success transition-colors outline-0"
        onChange={(e) => setCartInfo('name', e.target.value)}
        value={cart.name || ''}
        required
      />
      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="E-mail *"
        className="w-full p-1 pb-3 mt-9 border-b border-divider-alt focus:border-success transition-colors outline-0"
        onChange={(e) => setCartInfo('email', e.target.value)}
        value={cart.email || ''}
      />
    </div>
  );
}

const PhoneInput = ({ phone, onChange, onSubmit }: {
  phone: string,
  onChange: (value: string) => void,
  onSubmit: (phone: string) => void,
}) => {
  const [value, setValue] = useState<string>(phone);

  useEffect(() => {
    setValue(maskString(phone));
  }, [phone]);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const onInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const masked = maskString(e.target.value);
    setValue(masked);
    if (isValidMask(masked)) {
      e.target.blur();
      onSubmit(masked);
    }
  };

  return (
    <input
      type="tel"
      name="phone"
      autoComplete="tel"
      placeholder="Номер телефона *"
      className="w-full p-1 pb-3 border-b border-divider-alt focus:border-success transition-colors outline-0"
      value={value}
      onInput={onInput}
      required
    />
  );
}