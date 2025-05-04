const baseUrl: string = process.env.NEXT_PUBLIC_BACKEND_HOST ?? 'https://admin.vegas.anygroup.kz/api';

type Api = {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  request: (path: string, method?: string) => Promise<Response>;
};

const api: Api = {
  accessToken: null,

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  },

  request(path, method = 'GET') {
    return fetch(`${baseUrl}/${path}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...(this.accessToken ? {
          "Authorization": `Bearer ${this.accessToken}`
        } : {}),
      },
    });
  },
};

export default api;