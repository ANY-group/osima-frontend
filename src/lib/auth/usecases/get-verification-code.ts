import api from "@/lib/utils/api";
import { ValidationError } from "next/dist/compiled/amphtml-validator";

export default async function getVerificationCode(phone: string): Promise<ValidationError | null> {
  const res = await api.request(`auth/code?phone=${phone}`);

  if (!res.ok) {
    try {
      return await res.json()
    } catch (e) {
      return null;
    }
  }

  return null;
}