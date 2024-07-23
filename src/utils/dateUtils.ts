export const formatDate = (date: Date, format: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const parseDate = (dateString: string): Date => {
  return new Date(dateString);
};
