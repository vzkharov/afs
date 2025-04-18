'use client';

import { useState } from 'react';

import { cn } from '~/lib/utils';
import { isValidPhone, formatPhone } from '~/utils/phone';

import { Input } from '~/components/ui/input';

type PhoneInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'defaultValue'> & {
  defaultValue?: string;
  onChange?: (value: string) => void;
  onValidChange?: (isValid: boolean) => void;
};

const PhoneInput = ({ className, onChange, onValidChange, defaultValue, ...props }: PhoneInputProps) => {
  const initialValue = defaultValue ? formatPhone(defaultValue) : '';

  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(isValidPhone(initialValue));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue.length < value.length) {
      setValue(newValue);
      const valid = isValidPhone(newValue);
      setIsValid(valid);

      onChange?.(newValue);
      onValidChange?.(valid);
      return;
    }

    const digitsOnly = newValue.replace(/\D/g, '');

    if (digitsOnly.length > 11) {
      return;
    }

    const formatted = formatPhone(digitsOnly);
    setValue(formatted || newValue);

    const valid = isValidPhone(digitsOnly);
    setIsValid(valid);

    onChange?.(digitsOnly);
    onValidChange?.(valid);
  };

  const handleBlur = () => {
    if (!value) {
      return;
    }

    const digitsOnly = value.replace(/\D/g, '');
    const formatted = formatPhone(digitsOnly);

    if (!formatted) {
      return;
    }

    setValue(formatted);
    const valid = isValidPhone(digitsOnly);
    setIsValid(valid);

    onChange?.(digitsOnly);
    onValidChange?.(valid);
  };

  return (
    <Input
      type='tel'
      value={value}
      onBlur={handleBlur}
      aria-invalid={!isValid}
      onChange={handleChange}
      placeholder='+1 333 333 4444'
      className={cn(!isValid && value ? 'border-red-500/50 ring-1 ring-red-500/50' : '', className)}
      {...props}
    />
  );
};

export { PhoneInput };
