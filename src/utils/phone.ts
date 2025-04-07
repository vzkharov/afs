const phoneRegex = /^(\d{1})(\d{3})(\d{3})(\d{4})$/;

const isValidPhone = (phone: string): boolean => {
  if (!phone) {
    return false;
  }

  const digitsOnly = phone.replace(/\D/g, '');
  return phoneRegex.test(digitsOnly);
};

const formatPhone = (phone: string): string => {
  if (!phone) return '';

  const digitsOnly = phone.replace(/\D/g, '');

  const match = phoneRegex.exec(digitsOnly);

  if (!match) {
    return phone;
  }

  return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
};

export { isValidPhone, formatPhone };
