import Collection from "../types/collection";
import api from "./api";

const KZ_PHONE_MASK = "+7 (###) ###-##-##";


export const delay = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export const chunk = <T>(items: Array<T>, chunkSize: number): Array<Array<T>> => {
  const chunks = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
};

export const formatNumber = (num: number) => {
  return num.toLocaleString().replace(',', ' ');
}

export const maskString = (str: string, mask: string = KZ_PHONE_MASK) => {
  let res = "";
  const digits = str.replace(/\D/g, "");

  for (let i = 0, j = 0; i < mask.length && j < digits.length; i++) {
    if (mask[i] == '#') {
      res += digits[j++];
    } else {
      res += mask[i];
      if (mask[i] == digits[j]) {
        j++;
      }
    }
  }

  return res;
}

export const isValidMask = (str: string, mask: string = KZ_PHONE_MASK) => {
  return str === maskString(str, mask) && mask.length == str.length;
}

export const unmaskString = (str: string, mask: string = KZ_PHONE_MASK) => {
  let res = "";

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] == '#') {
      res += str[i] || '';
    }
  }

  return res;
}

export const mergeCollections = <T>(collection1: Collection<T>, collection2?: Collection<T>): Collection<T> => {
  if (!collection2) {
    return collection1;
  }

  return {
    data: [...collection1.data, ...collection2.data],
    meta: { ...collection1.meta, ...collection2.meta },
    links: { ...collection1.links, ...collection2.links },
  }
}

export const loadMore = async <T>(collection: Collection<T>) => {
  if (!collection.links.next) {
    return {};
  }

  const res = await api.request(collection.links.next);

  if (!res.ok) {
    return {};
  }

  return await res.json()
}
