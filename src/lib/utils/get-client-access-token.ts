'use client';

import Cookies from 'js-cookie'

export async function getClientAccessToken(): Promise<string | null> {
  return Cookies.get('access_token') || null;
}
