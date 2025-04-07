import type { Page } from '~/lib/types';

import { companyService } from '~/fetchers/company';
import { contactService } from '~/fetchers/contact';

import { CompanyScreen } from '~/modules/company-screen';

const HomePage: Page = async () => {
  const allCompanies = await companyService.getAll();

  const company = await companyService.getById(allCompanies[0].id);
  const contact = await contactService.getById(company.contactId);

  return (
    <CompanyScreen
      company={company}
      contact={contact}
    />
  );
};

export default HomePage;
