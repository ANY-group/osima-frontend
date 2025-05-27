import api from "@/lib/utils/api";

export default async function authenticateByCode(phone: string, code: string): Promise<string> {
  const res = await api.request(`auth/login`, 'POST', { phone, code });

  const { token } = await res.json();

  return token;
}