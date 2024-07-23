export const getQueryParams = (url: string): Record<string, string> => {
  const params = new URLSearchParams(new URL(url).search);
  const queryParams: Record<string, string> = {};
  params.forEach((value, key) => {
    queryParams[key] = value;
  });
  return queryParams;
};

export const debounce = <T extends (...args: any[]) => void>(func: T, delay: number): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
};
