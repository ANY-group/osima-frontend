import { ValidationError } from "next/dist/compiled/amphtml-validator";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function AuthVerificationCodeForm({
  phone,
  authenticate,
  resend,
  back,
}: {
  phone: string,
  authenticate: (code: string) => Promise<null | ValidationError>,
  resend: () => Promise<null | ValidationError>,
  back: () => void,
}) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationError | null>(null);

  const submitForm = async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const code = formData.get('code')?.toString() || '';

    setLoading(true);
    setErrors(null);
    setErrors(await authenticate(code));
    setLoading(false);
  };


  const onInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value?.length == 4) {
      const form = e.target.closest('form');
      if (form) {
        submitForm(form);
      }
    }
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    submitForm(e.target as HTMLFormElement);
  };

  return (
    <form onSubmit={onSubmit}>
      <p className="text-sm">
        Мы отправили код подтверждения на номер
      </p>
      <p className="font-semibold">
        {phone}
        <button type="button" className="mx-2 text-success" onClick={back}>
          Изменить
        </button>
      </p>
      <div className="my-4">
        <input
          type="text"
          name="code"
          autoComplete="tel"
          placeholder="Введите код"
          className="w-full p-1 pb-3 border-b border-divider-alt focus:border-success transition-colors outline-0"
          onInput={onInput}
          autoFocus
          required
          disabled={isLoading}
        />
        <p className="my-1 text-sm text-danger">
          {errors?.errors?.code}
        </p>
      </div>
      <button
        type="button"
        className="p-3 w-full rounded-xl bg-divider text-text-accent text-center text-xs font-semibold uppercase"
        onClick={resend}
      >
        Получить код повторно
      </button>

    </form>
  );
}