const baseUrl: string = process.env.NEXT_PUBLIC_BACKEND_HOST ?? 'https://admin.vegas.anygroup.kz/api';

type Api = {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  request: (
    path: string,
    method?: string,
    body?: any,
    headers?: HeadersInit,
    revalidate?: number,
  ) => Promise<Response>;
  authRequest: (
    path: string,
    method?: string,
    body?: any,
    headers?: HeadersInit,
    revalidate?: number,
  ) => Promise<Response>;
};

const api: Api = {
  accessToken: null,

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  },

  authRequest(path, method, body: {}, headers = {}, revalidate = 0) {
    return this.request(
      path,
      method = 'GET',
      body,
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
    body = {},
    headers = {},
    revalidate = 3,
  ) {
    const url = path.indexOf("http") == 0 ? path : `${baseUrl}/${path}`;

    return fetch(url, {
      next: { revalidate },
      method: method,
      headers: {
        ...headers,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: method == 'POST' ? JSON.stringify(body) : null,
    });
  },
};

export default api;