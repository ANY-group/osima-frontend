import api from "@/lib/utils/api";

export default async function getVerificationCode(phone: string): Promise<void> {
  await api.request(`auth/code?phone=${phone}`);
}