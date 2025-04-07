import type { FormProps } from '~/lib/types';
import type { Contact } from '~/entities/contact';

import { labels } from '~/config/translations';

import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';

import { PhoneInput } from '~/components/(inputs)/phone-input';
import { FullnameInput } from '~/components/(inputs)/fullname-input';

const ContactForm = ({ value, onValueChange }: FormProps<Contact>) => (
  <div className={css.root}>
    <div className={css.row}>
      <Label>{labels.fullname}:</Label>
      <FullnameInput
        value={value}
        onChange={(_value) =>
          onValueChange?.({
            firstname: _value.firstname,
            lastname: _value.lastname,
          })
        }
      />
    </div>

    <div className={css.row}>
      <Label>{labels.phone}:</Label>
      <PhoneInput
        defaultValue={value.phone}
        onChange={(_phone: string) => onValueChange?.({ phone: _phone })}
      />
    </div>

    <div className={css.row}>
      <Label>{labels.email}:</Label>
      <Input
        type='email'
        defaultValue={value.email}
        onChange={(e) => onValueChange?.({ email: e.target.value })}
      />
    </div>
  </div>
);

const css = {
  root: 'flex flex-col gap-y-3',
  row: 'flex items-center gap-4 [&_label]:shrink-0',
};

export { ContactForm };
