export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const truncateString = (string: string, length: number): string => {
  return string.length > length ? string.slice(0, length) + '...' : string;
};
