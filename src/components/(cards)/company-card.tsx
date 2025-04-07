import { formatDate } from '~/utils/datetime';
import { labels } from '~/config/translations';
import { config as companyTypes } from '~/config/company-type';

import type { CompanyDetails } from '~/entities/company';

import { Label } from '~/components/ui/label';

const CompanyCard = (company: CompanyDetails) => {
  const rows = [
    { label: labels.agreement, value: company.contract.no, secondValue: formatDate(company.contract.issue_date) },
    { label: labels.businessEntity, value: company.businessEntity },
    { label: labels.companyType, value: company.type.map((type) => companyTypes[type].label).join(', ') },
  ];

  return (
    <div className={css.root}>
      {rows.map((row, idx) => (
        <div
          key={idx}
          className={css.row}
        >
          <Label>{row.label}</Label>
          <div className={css.value}>
            {row.value}
            {row.secondValue && (
              <>
                <span className={css.separator}>/</span>
                <span>{row.secondValue}</span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const css = {
  root: 'flex flex-col gap-y-0.5',
  row: 'flex items-center gap-4 h-8',
  value: 'flex-1 text-md',
  separator: 'mx-2.5 text-foreground/20 text-lg pointer-events-none',
};

export { CompanyCard };
