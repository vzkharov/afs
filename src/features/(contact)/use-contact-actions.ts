'use client';

import { useState } from 'react';
import { toast } from 'sonner';

import type { Contact } from '~/entities/contact';
import { contactService } from '~/fetchers/contact';

const useContactActions = (initialData: Contact) => {
  const [optimisticContact, setOptimisticContact] = useState<Contact>(initialData);

  const handleChangeContact = async (_contact: Partial<Contact>) => {
    const updatedContact = {
      ...optimisticContact,
      ..._contact,
    };

    setOptimisticContact(updatedContact);
  };

  const handleUpdateContact = async (_contact: Partial<Contact>) => {
    handleChangeContact(_contact);

    const promise = contactService.updateById(optimisticContact.id, _contact);

    toast.promise(promise, {
      loading: 'Updating contact...',
      success: 'Contact updated',
      error: 'Failed to update contact',
    });

    await promise.then((updatedContact) => {
      setOptimisticContact(updatedContact);
    });
  };

  return {
    state: optimisticContact,
    update: handleUpdateContact,
  };
};

export { useContactActions };
