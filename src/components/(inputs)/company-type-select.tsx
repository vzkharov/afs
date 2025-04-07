import type { StyleProps } from '~/lib/types';

import type { CompanyType } from '~/entities/company';
import { config as companyTypes } from '~/config/company-type';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

type CompanyTypeSelectProps = StyleProps & {
  value: CompanyType[];
  onValueChange?: (value: CompanyType[]) => void;
};

const CompanyTypeSelect = ({ value, onValueChange, style, className }: CompanyTypeSelectProps) => (
  <Select
    defaultValue={value.join(', ')}
    onValueChange={(value) => onValueChange?.(value as CompanyType[])}
  >
    <SelectTrigger
      style={style}
      className={className}
    >
      <SelectValue placeholder='Select type' />
    </SelectTrigger>
    <SelectContent>
      {[companyTypes.funeral_home, companyTypes.logistics_services, companyTypes.burial_care_contractor].map(
        (option) => (
          <SelectItem
            key={option.value}
            value={option.value}
          >
            {option.label}
          </SelectItem>
        )
      )}
    </SelectContent>
  </Select>
);

export { CompanyTypeSelect };
