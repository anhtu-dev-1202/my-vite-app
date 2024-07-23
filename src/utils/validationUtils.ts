export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isPhoneNumberValid = (phoneNumber: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/; // Ví dụ cho số điện thoại 10 chữ số
  return phoneRegex.test(phoneNumber);
};
