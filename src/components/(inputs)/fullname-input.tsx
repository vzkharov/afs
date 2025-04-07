import { Input, type InputProps } from '~/components/ui/input';

type Value = {
  firstname: string;
  lastname: string;
};

type FullnameInputProps = Omit<InputProps, 'type' | 'pattern' | 'value' | 'onChange'> & {
  value: Value;
  onChange: (value: Value) => void;
};

const FullnameInput = ({ value, onChange, ...props }: FullnameInputProps) => (
  <Input
    {...props}
    type='text'
    pattern='^(\w\w+)\s(\w+)$'
    defaultValue={`${value.firstname} ${value.lastname}`}
    onChange={(e) => onChange?.({ firstname: e.target.value.split(' ')[0], lastname: e.target.value.split(' ')[1] })}
  />
);

export { FullnameInput };
export type { FullnameInputProps };
