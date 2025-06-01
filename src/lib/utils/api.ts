import ValidationError from "../exceptions/validation-error";
import { getClientAccessToken } from "./get-client-access-token";
import { getServerAccessToken } from "./get-server-access-token";

export enum RequestMethod {
  GET = 'get',
  POST = 'post',
};

const baseUrl: string = process.env.NEXT_PUBLIC_BACKEND_HOST ?? 'https://admin.vegas.anygroup.kz/api';

type Api = {
  request: (
    path: string,
    options?: {
      method?: RequestMethod,
      data?: object,
      headers?: HeadersInit,
      revalidate?: number,
    },
  ) => Promise<Response>;
};

async function getAccessToken(isServer: boolean): Promise<string | null> {
  if (isServer) {
    return getServerAccessToken();
  } else {
    return getClientAccessToken();
  }
}

const api: Api = {
  async request(
    path,
    options = {
      method: RequestMethod.GET,
      data: {},
      headers: {},
      revalidate: 10,
    },
  ) {
    const url = (path.indexOf('/') == 0 || path.indexOf("http") == 0) ? path : `${baseUrl}/${path}`;

    console.log("Sending request to: " + url);

    const accessToken = await getAccessToken(typeof window === 'undefined');

    if (options.method == RequestMethod.GET) {
      // TODO: add query params to url
    }

    const res = await fetch(url, {
      next: { revalidate: options.revalidate },
      method: options.method,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        ...(accessToken ? {
          "Authorization": `Bearer ${accessToken}`
        } : {}),
        ...options.headers,
      },
      body: options.method == RequestMethod.POST ? JSON.stringify(options.data) : null,
    });

    if (res.status >= 400 && res.status < 500) {
      const { message, errors } = await res.json();
      throw new ValidationError(message, errors);
    }

    return res;
  },
};

export default api;