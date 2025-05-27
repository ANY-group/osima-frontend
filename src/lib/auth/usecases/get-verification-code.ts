import api from "@/lib/utils/api";

export default async function getVerificationCode(phone: string): Promise<void> {
  const res = await api.request(`auth/code?phone=${phone}`);

  console.log(res);

  return;
}