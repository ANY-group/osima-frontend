'use client';

import { AuthContext } from "./auth-context";
import { UserEntity } from "@/lib/auth/types/user";
import fetchUser from "@/lib/auth/usecases/fetch-user";
import Cookies from 'js-cookie';
import { useState } from "react";

export default function AuthProvider({ children, initialUser }: {
  children: React.ReactNode,
  initialUser: UserEntity | null,
}) {
  const [user, setUser] = useState<UserEntity | null>(initialUser);

  const logout = async () => {
    Cookies.remove('access_token');
    // TODO: send logout request
    setUser(null);
  };

  const login = async (token: string) => {
    Cookies.set('access_token', token, { expires: 365 });
    const user = await fetchUser().catch(() => null);
    setUser(user);
  };

  const value = { user, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}