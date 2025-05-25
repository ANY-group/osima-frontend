import api from "@/lib/utils/api";
import { ValidationError } from "next/dist/compiled/amphtml-validator";

export default async function authenticateByCode(phone: string, code: string): Promise<null | string | ValidationError> {
  const res = await api.request(`auth/login`, 'POST', { phone, code });

  if (!res.ok) {
    try {
      return await res.json();
    } catch (e) {
      return null;
    }
  }

  const { token } = await res.json();

  return token;
}