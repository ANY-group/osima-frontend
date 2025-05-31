const KG_PHONE_MASK = "+996 (###) ###-##-##";


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

export const maskString = (str: string, mask: string = KG_PHONE_MASK) => {
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

export const isValidMask = (str: string, mask: string = KG_PHONE_MASK) => {
  return str === maskString(str, mask) && mask.length == str.length;
}

export const unmaskString = (str: string, mask: string = KG_PHONE_MASK) => {
  let res = "";

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] == '#') {
      res += str[i] || '';
    }
  }

  return res;
}