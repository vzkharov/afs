import { labels } from '~/config/translations';
import { formatPhone } from '~/utils/phone';

import type { Contact } from '~/entities/contact';

import { Label } from '~/components/ui/label';

const ContactCard = (contact: Contact) => {
  const rows = [
    { label: labels.fullname, value: `${contact.firstname} ${contact.lastname}` },
    { label: labels.phone, value: formatPhone(contact.phone) },
    { label: labels.email, value: contact.email },
  ];

  return (
    <div className={css.root}>
      {rows.map((row, idx) => (
        <div
          key={idx}
          className={css.row}
        >
          <Label>{row.label}:</Label>
          <div className={css.value}>{row.value}</div>
        </div>
      ))}
    </div>
  );
};

const css = {
  root: 'flex flex-col gap-y-0.5',
  row: 'flex items-center gap-4 h-8',
  value: 'flex-1 text-md',
};

export { ContactCard };
