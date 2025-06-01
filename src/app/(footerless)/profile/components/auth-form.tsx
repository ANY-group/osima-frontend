'use client';

import ErrorText from "@/app/components/ui/error-text";
import ValidationError from "@/lib/exceptions/validation-error";
import { maskString } from "@/lib/utils/helpers";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function AuthForm({ phone, error, getVerificationCode }: {
  phone: string,
  error: ValidationError | null,
  getVerificationCode: (phone: string) => Promise<void>,
}) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>(phone);

  const onInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(maskString(e.target.value));
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const phone = formData.get('phone')?.toString() || '';

    setLoading(true);
    await getVerificationCode(phone);
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
          className="w-full p-1 pb-3 border-b border-divider-alt focus:border-success user-invalid:border-danger transition-colors outline-0"
          onInput={onInput}
          value={value}
          autoFocus
          required
          disabled={isLoading}
          maxLength={30}
        />
        <ErrorText error={error?.errors?.phone} />
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