'use client';

import { AuthContext } from "@/app/(footerless)/profile/components/auth-context";
import { isValidMask, maskString } from "@/lib/utils/helpers";
import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { CartContext } from "./controllers/cart-context";
import authenticateByCode from "@/lib/auth/usecases/authenticate-by-code";
import getVerificationCode from "@/lib/auth/usecases/get-verification-code";
import ValidationError from "@/lib/exceptions/validation-error";

export default function CheckoutUserInfo() {
  const { user, login } = useContext(AuthContext);
  const { cart, setCartInfo, error, setError } = useContext(CartContext);

  const [isCodeSent, setCodeSent] = useState<boolean>(false);

  const requestVerificationCode = async (phone?: string) => {
    setError(null);

    try {
      await getVerificationCode(phone || cart.phone!)
      setCodeSent(true);
    } catch (e) {
      if (e instanceof ValidationError) {
        setError(e);
      }
    }
  };

  const authenticate = async (code: string) => {
    if (code.length != 4) {
      return;
    }

    setError(null);
    try {
      const token = await authenticateByCode(cart.phone!, code);
      await login(token);
      setCodeSent(false);
    } catch (e) {
      if (e instanceof ValidationError) {
        setError(e);
      }
    }
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
      {error?.errors.phone && (
        <p className="text-danger text-xs sm:text-sm my-1">
          {error?.errors.phone}
        </p>
      )}
      {!user && isCodeSent && (
        <>
          <input
            type="tel"
            name="code"
            placeholder="Введите код *"
            className="w-full p-1 pb-3 border-b border-divider-alt focus:border-success transition-colors outline-0"
            required
            autoFocus
            onChange={(e) => authenticate(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
          />
          {error?.errors.code && (
            <p className="text-danger text-xs sm:text-sm my-1">
              {error?.errors.code}
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
        maxLength={100}
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
        maxLength={100}
      />
    </div>
  );
}

const PhoneInput = ({ phone, onChange, onSubmit }: {
  phone: string,
  onChange: (value: string) => void,
  onSubmit: (phone: string) => void,
}) => {
  const [value, setValue] = useState<string>(maskString(phone));

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
      maxLength={30}
      required
    />
  );
}