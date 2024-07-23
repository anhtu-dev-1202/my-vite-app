export const handleApiResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
};

export const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return handleApiResponse<T>(response);
};
