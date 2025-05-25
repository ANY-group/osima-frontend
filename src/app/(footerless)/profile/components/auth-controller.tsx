'use client';

import { useState } from "react";
import AuthForm from "./auth-form";
import AuthVerificationCodeForm from "./auth-verification-code-form";
import authenticateByCode from "@/lib/auth/usecases/authenticate-by-code";
import getVerificationCode from "@/lib/auth/usecases/get-verification-code";
import { ValidationError } from "next/dist/compiled/amphtml-validator";

enum AuthStep {
  signin,
  verification
};

export default function AuthController({ close }: {
  close: () => void,
}) {
  const [step, setStep] = useState<AuthStep>(AuthStep.signin);
  const [phone, setPhone] = useState<string>('');

  const sendGetVerificationCodeRequest = async (phone: string) => {
    const errors = await getVerificationCode(phone);

    setPhone(phone);

    if (!errors) {
      setStep(AuthStep.verification);
      return;
    }

    return errors;
  };

  const sendAuthenticateRequest = async (code: string) => {
    const errors = await authenticateByCode(phone, code);

    if (!errors) {
      close();
      return;
    }

    return errors;
  };

  return (
    <>
      <p className="text-2xl font-bold my-4 sm:mt-40">
        {step == AuthStep.signin && 'Войдите или зарегистрируйтесь, чтобы продолжить'}
        {step == AuthStep.verification && 'Введите код'}
      </p>

      {step == AuthStep.signin && (
        <AuthForm
          phone={phone}
          getVerificationCode={sendGetVerificationCodeRequest}
        />
      )}
      {step == AuthStep.verification && (
        <AuthVerificationCodeForm
          phone={phone}
          authenticate={sendAuthenticateRequest}
          resend={() => sendGetVerificationCodeRequest(phone)}
          back={() => setStep(AuthStep.signin)}
        />
      )}

    </>
  );
}