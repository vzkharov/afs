import * as React from 'react';

import { cn } from '~/lib/utils';
import { isValidPhone, formatPhone } from '~/utils/phone';

import { Input } from '~/components/ui/input';

type PhoneInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange?: (value: string) => void;
  onValidChange?: (isValid: boolean) => void;
};

const PhoneInput = ({ className, onChange, onValidChange, ...props }: PhoneInputProps) => {
  const [value, setValue] = React.useState(formatPhone((props.defaultValue as string) || ''));
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (newValue === '' || newValue.startsWith('+')) {
      setValue(newValue);
      const valid = isValidPhone(newValue);
      setIsValid(valid);

      onChange?.(newValue);
      onValidChange?.(valid);
    }
  };

  const handleBlur = () => {
    if (value && !isValidPhone(value)) {
      const formatted = formatPhone(value);
      setValue(formatted);
      const valid = isValidPhone(formatted);
      setIsValid(valid);

      onChange?.(formatted);
      onValidChange?.(valid);
    }
  };

  return (
    <Input
      type='tel'
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder='+1 702 555 2345'
      className={cn(isValid ? 'border-green-500/50' : value ? 'border-red-500/50' : '', className)}
      {...props}
    />
  );
};

export { PhoneInput };
