import { CompanyType } from '~/entities/company';

type Config = {
  label: string;
  value: CompanyType;
};

const config = {
  funeral_home: {
    label: 'Funeral Home',
    value: 'funeral_home',
  },
  logistics_services: {
    label: 'Logistics services',
    value: 'logistics_services',
  },
  burial_care_contractor: {
    label: 'Burial care Contractor',
    value: 'burial_care_contractor',
  },
} satisfies Record<CompanyType, Config>;

export { config };
