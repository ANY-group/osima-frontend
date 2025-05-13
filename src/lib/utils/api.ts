const baseUrl: string = process.env.NEXT_PUBLIC_BACKEND_HOST ?? 'https://admin.vegas.anygroup.kz/api';

type Api = {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  request: (
    path: string,
    method?: string,
    headers?: HeadersInit,
    revalidate?: number,
  ) => Promise<Response>;
  authRequest: (
    path: string,
    method?: string,
    headers?: HeadersInit,
    revalidate?: number,
  ) => Promise<Response>;
};

const api: Api = {
  accessToken: null,

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  },

  authRequest(path, method, headers = {}, revalidate = 0) {
    return this.request(
      path,
      method = 'GET',
      headers = {
        ...headers,
        ...(this.accessToken ? {
          "Authorization": `Bearer ${this.accessToken}`
        } : {}),
      },
      revalidate,
    );
  },

  request(
    path,
    method = 'GET',
    headers = {},
    revalidate = 3,
  ) {
    return fetch(`${baseUrl}/${path}`, {
      next: { revalidate },
      method: method,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });
  },
};

export default api;