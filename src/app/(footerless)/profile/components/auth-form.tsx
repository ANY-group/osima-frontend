'use client';

import { isValidMask, maskString, unmaskString } from "@/lib/utils/helpers";
import { ValidationError } from "next/dist/compiled/amphtml-validator";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function AuthForm({ phone, getVerificationCode }: {
  phone: string,
  getVerificationCode: (phone: string) => Promise<null | ValidationError>,
}) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationError>(null);
  const [value, setValue] = useState<string>(phone);

  const onInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const masked = maskString(e.target.value);
    setValue(masked);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const phone = formData.get('phone')?.toString() || '';

    if (!isValidMask(phone)) {
      // TODO: throw validation error
      return;
    }

    setLoading(true);
    setErrors(await getVerificationCode(phone));
    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="my-4">
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Телефон"
          className="w-full p-1 pb-3 border-b border-divider-alt focus:border-success transition-colors outline-0"
          onInput={onInput}
          value={value}
          autoFocus
          required
          disabled={isLoading}
        />
        <p className="my-1 text-sm text-danger">
          {errors?.errors?.phone}
        </p>
      </div>
      <button
        type="submit"
        className="p-3 w-full rounded-xl bg-success text-success-foreground text-center text-xs font-bold uppercase"
      >
        Получить код
      </button>
    </form>
  );
}