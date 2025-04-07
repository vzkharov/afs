import type { FormProps } from '~/lib/types';

import type { CompanyDetails } from '~/entities/company';

import { labels } from '~/config/translations';

import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';

import { DateInput } from '~/components/(inputs)/date-input';
import { CompanyTypeSelect } from '~/components/(inputs)/company-type-select';
import { BusinessEntitySelect } from '~/components/(inputs)/business-entity-select';

const CompanyForm = ({ value, onValueChange }: FormProps<CompanyDetails>) => (
  <div className={css.root}>
    <div className={css.row}>
      <Label>{labels.agreementNumber}:</Label>
      <Input
        defaultValue={value.contract.no}
        onChange={(e) => onValueChange?.({ contract: { ...value.contract, no: e.target.value } })}
      />

      <Label width='fit'>{labels.date}:</Label>
      <DateInput
        value={value.contract.issue_date}
        onChange={(_date) => onValueChange?.({ contract: { ...value.contract, issue_date: _date } })}
      />
    </div>

    <div className={css.row}>
      <Label>{labels.businessEntity}:</Label>
      <BusinessEntitySelect
        value={value.businessEntity}
        onValueChange={(_value) => onValueChange?.({ businessEntity: _value })}
      />
    </div>

    <div className={css.row}>
      <Label>{labels.companyType}:</Label>
      <CompanyTypeSelect
        value={value.type}
        onValueChange={(_value) => onValueChange?.({ type: _value })}
      />
    </div>
  </div>
);

const css = {
  root: 'flex flex-col gap-y-3',
  row: 'flex items-center gap-4 [&_label]:shrink-0',
};

export { CompanyForm };
