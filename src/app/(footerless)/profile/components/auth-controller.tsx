'use client';

import { useContext, useState } from "react";
import AuthForm from "./auth-form";
import AuthVerificationCodeForm from "./auth-verification-code-form";
import authenticateByCode from "@/lib/auth/usecases/authenticate-by-code";
import getVerificationCode from "@/lib/auth/usecases/get-verification-code";
import { AuthContext } from "./controllers/auth-context";
import ValidationError from "@/lib/exceptions/validation-error";

enum AuthStep {
  signin,
  verification
};

export default function AuthController({ close }: {
  close: () => void,
}) {
  const { login } = useContext(AuthContext);

  const [step, setStep] = useState<AuthStep>(AuthStep.signin);
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<ValidationError | null>(null);

  const sendGetVerificationCodeRequest = async (phone: string) => {
    try {
      await getVerificationCode(phone);

      setPhone(phone);
      setStep(AuthStep.verification);
    } catch (e) {
      if (e instanceof ValidationError) {
        setError(e);
      }
    }
  };

  const sendAuthenticateRequest = async (code: string) => {
    try {
      const token = await authenticateByCode(phone, code);
      await login(token);
      close();
    } catch (e) {
      if (e instanceof ValidationError) {
        setError(e);
      }
    }
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
          error={error}
          getVerificationCode={sendGetVerificationCodeRequest}
        />
      )}
      {step == AuthStep.verification && (
        <AuthVerificationCodeForm
          phone={phone}
          error={error}
          authenticate={sendAuthenticateRequest}
          resend={() => sendGetVerificationCodeRequest(phone)}
          back={() => setStep(AuthStep.signin)}
        />
      )}

    </>
  );
}