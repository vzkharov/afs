const phoneRegex = /^\d{1}\d{3}\d{3}\d{4}$/;

const isValidPhone = (phone: string) => phoneRegex.test(phone);

const formatPhone = (phone: string) => phoneRegex.exec(phone)?.join(' ');

export { isValidPhone, formatPhone };
