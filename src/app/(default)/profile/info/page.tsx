'use client';

import Subheader from "@/app/components/subheader";
import ShieldCheckIcon from "@/app/components/ui/icons/shield-check-icon";
import UserCircleAltIcon from "@/app/components/ui/icons/user-circle-alt-icon";
import { FormEventHandler, HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";

export default function ProfileInfoPage() {
  return (
    <main className="w-full">
      <section className="md:hidden py-3">
        <Subheader title="Личные данные" />
      </section>
      <section className="px-4 py-10 mb-20 rounded-lg bg-background">
        <h2 className="flex items-center gap-4 text-xl font-bold">
          <ShieldCheckIcon />
          Учетная запись
        </h2>
        <InlineForm
          type="text"
          name="tel"
          label="Телефон"
          value="87753028045"
          readonly
        />
        <InlineForm
          type="email"
          name="email"
          autoComplete="email"
          label="Почта"
          value={null}
          placeholder="mail@example.com"
        />

        <hr className="border-divider my-6" />

        <h2 className="flex items-center gap-4 text-xl font-bold">
          <UserCircleAltIcon />
          Личные данные
        </h2>
        <InlineForm
          type="text"
          name="name"
          autoComplete="given-name"
          label="Фамилия Имя"
          value={null}
          placeholder="Имя"
        />
        <InlineForm
          type="text"
          name="birth_date"
          label="Дата рождения"
          value={null}
          placeholder="дд.мм.гггг"
        />

      </section>
    </main>
  );
}

const InlineForm = ({
  type,
  name,
  label,
  value,
  placeholder,
  autoComplete,
  autoCapitalize,
  required,
  readonly,
}: {
  type: HTMLInputTypeAttribute,
  name: string,
  label: string,
  value: string | null,
  placeholder?: string,
  autoComplete?: HTMLInputAutoCompleteAttribute,
  autoCapitalize?: string,
  required?: boolean,
  readonly?: boolean,
}) => {
  const [isEditable, setEditable] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditable) {
      inputRef.current?.focus();
    }
  }, [isEditable]);

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (readonly) {
      return;
    }

    console.log(new FormData(e.target as HTMLFormElement));
  };

  return (
    <form onSubmit={onSubmit} className="ml-12 my-6">
      <label>
        <p className="text-text-secondary text-xs">
          {label}
        </p>
        <input
          ref={inputRef}
          type={type}
          name={name}
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize}
          disabled={!isEditable}
          placeholder={value || placeholder}
          required={required}
          className="min-w-3xs outline-none text-sm disabled:placeholder:text-foreground"
        />
      </label>
      {!readonly && (
        <button
          onClick={() => setEditable(!isEditable)}
          type={isEditable ? "submit" : "button"}
          className="text-success text-sm font-bold"
        >
          {isEditable ? 'Сохранить' : 'Изменить'}
        </button>
      )}
    </form>
  );
}