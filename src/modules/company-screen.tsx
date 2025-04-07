'use client';

import { withEditableCard } from '~/HOCs/with-editable-card';

import type { Company } from '~/entities/company';
import type { Contact } from '~/entities/contact';

import { useCompanyActions } from '~/features/(company)/use-company-actions';
import { useContactActions } from '~/features/(contact)/use-contact-actions';

import { Button } from '~/components/ui/button';
import { EditIcon } from '~/components/ui/icons/edit';
import { TrashIcon } from '~/components/ui/icons/trash';

import { ContactCard } from '~/components/(cards)/contact-card';
import { CompanyCard } from '~/components/(cards)/company-card';

import { ImagesForm } from '~/components/(forms)/images-form';
import { ContactForm } from '~/components/(forms)/contact-form';
import { CompanyForm } from '~/components/(forms)/company-form';

import { RemoveCompanyModal } from '~/modules/(modals)/remove-company-modal';
import { EditCompanyNameModal } from '~/modules/(modals)/edit-company-name-modal';

const EditableContactForm = withEditableCard<Contact>(ContactForm, ContactCard);
const EditableCompanyDetailsForm = withEditableCard<Company>(CompanyForm, CompanyCard);

type CompanyScreenProps = {
  company: Company;
  contact: Contact;
};

const CompanyScreen = ({ company, contact }: CompanyScreenProps): JSX.Element => {
  const {
    state: optimisticCompany,
    update: handleChangeCompany,
    remove: handleRemoveCompany,
    removeImage: handleRemoveCompanyImage,
    uploadImage: handleUploadCompanyImage,
  } = useCompanyActions(company);

  const { state: optimisticContact, update: handleChangeContact } = useContactActions(contact);

  return (
    <>
      <header className={css.header}>
        <h1 className={css.title}>{optimisticCompany.name}</h1>

        <EditCompanyNameModal
          companyId={company.id}
          initialTitle={optimisticCompany.name}
          onConfirm={(_, title) => handleChangeCompany({ name: title })}
        >
          <Button
            size='icon'
            variant='ghost'
          >
            <EditIcon />
          </Button>
        </EditCompanyNameModal>

        <RemoveCompanyModal
          companyId={company.id}
          onConfirm={handleRemoveCompany}
        >
          <Button
            size='icon'
            variant='ghost'
          >
            <TrashIcon />
          </Button>
        </RemoveCompanyModal>
      </header>

      <section className={css.section}>
        <EditableCompanyDetailsForm
          title='Company details'
          value={optimisticCompany}
          onValueChange={handleChangeCompany}
        />

        <EditableContactForm
          title='Contacts'
          value={optimisticContact}
          onValueChange={handleChangeContact}
        />

        <ImagesForm
          value={optimisticCompany.photos}
          onCreate={handleUploadCompanyImage}
          onRemove={handleRemoveCompanyImage}
        />
      </section>
    </>
  );
};

const css = {
  header: 'flex items-center w-full gap-1',
  title: 'flex-1 text-xl font-medium truncate',
  section: 'flex flex-col items-start gap-4 w-full',
};

export { CompanyScreen };
