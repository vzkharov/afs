import { Input, type InputProps } from '~/components/ui/input';

type DateInputProps = Omit<InputProps, 'type' | 'value' | 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
};

const DateInput = ({ value, onChange, ...props }: DateInputProps) => (
  <Input
    {...props}
    type='date'
    defaultValue={fromIsoToDateValue(value)}
    onChange={(e) => onChange?.(fromDateValueToIso(e.target.value))}
  />
);

const fromIsoToDateValue = (iso: string) => new Date(iso).toISOString().split('T')[0];
const fromDateValueToIso = (date: string) => new Date(date).toISOString();

export { DateInput };
export type { DateInputProps };
