'use client';

import type { StyleProps } from '~/lib/types';

import type { CompanyType } from '~/entities/company';
import { config as companyTypes } from '~/config/company-type';

import { Checkbox } from '~/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger } from '~/components/ui/select';

type CompanyTypeSelectProps = StyleProps & {
  value: CompanyType[];
  onValueChange?: (value: CompanyType[]) => void;
};

const CompanyTypeSelect = ({ value, onValueChange, style, className }: CompanyTypeSelectProps) => {
  const defaultValue = createDefaultValue(value);

  const handleValueChange = (value: string) => onValueChange?.(parseMultiSelectValue(value));

  const label = value.length > 0 ? value.map((item) => companyTypes[item].label).join(', ') : 'Select type';

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={handleValueChange}
    >
      <SelectTrigger
        style={style}
        className={className}
      >
        {label}
      </SelectTrigger>
      <SelectContent>
        {[companyTypes.funeral_home, companyTypes.logistics_services, companyTypes.burial_care_contractor].map(
          (option) => (
            <SelectItem
              key={option.value}
              value={createMultiSelectValue(value, option.value)}
              startContent={<Checkbox checked={value.includes(option.value)} />}
            >
              {option.label}
            </SelectItem>
          )
        )}
      </SelectContent>
    </Select>
  );
};

const SEPARATOR = ', ';
const EMPTY_VALUE = '__EMPTY__';

const createDefaultValue = (value: CompanyType[]): string => value.join(SEPARATOR);

const createMultiSelectValue = (selected: CompanyType[], value: CompanyType): string => {
  const updatedValues = selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value];

  return updatedValues.length > 0 ? updatedValues.join(SEPARATOR) : EMPTY_VALUE;
};

const parseMultiSelectValue = (value: string): CompanyType[] => {
  if (value === EMPTY_VALUE) {
    return [];
  }

  return value.split(SEPARATOR) as CompanyType[];
};

export { CompanyTypeSelect, createMultiSelectValue, parseMultiSelectValue };
