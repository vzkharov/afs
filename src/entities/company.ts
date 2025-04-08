import type { Photo } from './photo';

type CompanyStatus = 'active' | 'inactive';
type CompanyType = 'funeral_home' | 'logistics_services' | 'burial_care_contractor';
type CompanyBusinessEntity = 'Sole Proprietorship' | 'Partnership' | 'Limited Liability Company' | (string & {});

type CompanyContract = {
  no: string;

  /** @format date-time */
  issue_date: string;
};

type Company = {
  id: string;

  /**
   * @description Company information
   */
  name: string;
  shortName: string;
  businessEntity: CompanyBusinessEntity;

  type: CompanyType[];
  status: CompanyStatus;

  /**
   * @description Relation fields
   */
  contactId: string;
  contract: CompanyContract;
  photos: Photo[];

  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
};

type CompanyDetails = Pick<Company, 'shortName' | 'businessEntity' | 'type' | 'status' | 'contract'>;

export type { Company, CompanyContract, CompanyStatus, CompanyBusinessEntity, CompanyType, CompanyDetails };
