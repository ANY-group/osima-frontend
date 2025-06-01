import api from "@/lib/utils/api";
import { UserEntity } from "../types/user";

export default async function fetchUser(): Promise<UserEntity | null> {
  const res = await api.request('profile', {
    revalidate: 0,
  });

  if (!res.ok) {
    return null;
  }

  const { user } = await res.json();

  return user || null;
}