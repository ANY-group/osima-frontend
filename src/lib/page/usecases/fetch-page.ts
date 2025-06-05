import api from "@/lib/utils/api";

export default async function fetchPage<T>(template: string): Promise<T> {
  const res = await api.request(`page/${template}`);

  const { page } = await res.json();

  return page;
}