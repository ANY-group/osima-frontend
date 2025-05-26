'use client';

import { useContext, useState } from "react";
import AuthForm from "./auth-form";
import AuthVerificationCodeForm from "./auth-verification-code-form";
import authenticateByCode from "@/lib/auth/usecases/authenticate-by-code";
import getVerificationCode from "@/lib/auth/usecases/get-verification-code";
import { AuthContext } from "./auth-context";

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
    const tokenOrErrors = await authenticateByCode(phone, code);

    if (typeof tokenOrErrors === 'string') {
      await login(tokenOrErrors);
      close();
      // TODO: mb redirect?
      // router.push('/profile');
      return;
    }

    return tokenOrErrors;
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