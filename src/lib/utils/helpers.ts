export const delay = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
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