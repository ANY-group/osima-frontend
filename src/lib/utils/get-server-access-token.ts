'use server';

import { cookies } from "next/headers";

export async function getServerAccessToken(): Promise<string | null> {
  return (await cookies()).get('access_token')?.value || null;
}
