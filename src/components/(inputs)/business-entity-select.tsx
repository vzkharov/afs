'use client';

import type { StyleProps } from '~/lib/types';

import type { CompanyBusinessEntity } from '~/entities/company';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

type BusinessEntitySelectProps = StyleProps & {
  value: CompanyBusinessEntity;
  onValueChange?: (value: CompanyBusinessEntity) => void;
};

const BusinessEntitySelect = ({ value, onValueChange, style, className }: BusinessEntitySelectProps) => (
  <Select
    defaultValue={value}
    onValueChange={(value) => onValueChange?.(value)}
  >
    <SelectTrigger
      style={style}
      className={className}
    >
      <SelectValue placeholder='Select entity' />
    </SelectTrigger>
    <SelectContent>
      {options.map((option) => (
        <SelectItem
          key={option.value}
          value={option.value}
        >
          {option.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const options: { label: string; value: CompanyBusinessEntity }[] = [
  { label: 'Sole Proprietorship', value: 'Sole Proprietorship' },
  { label: 'Partnership', value: 'Partnership' },
  { label: 'Limited Liability Company', value: 'Limited Liability Company' },
];

export { BusinessEntitySelect };
