'use client';

import { UserEntity } from "@/lib/auth/types/user";
import { createContext } from "react";

type AuthState = {
  user: UserEntity | null,
  logout: () => Promise<void>,
  login: (token: string) => Promise<void>,
};

export const AuthContext = createContext<AuthState>({
  user: null,
  logout: async () => { },
  login: async () => { },
});