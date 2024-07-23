export const removeDuplicates = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

export const findById = <T extends { id: number }>(array: T[], id: number): T | undefined => {
  return array.find((item) => item.id === id);
};
