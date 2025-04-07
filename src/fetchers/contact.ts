import { createApi } from '~/lib/api';
import type { Contact } from '~/entities/contact';

const contactApi = createApi('/contacts');

const getContactById = async (id: string): Promise<Contact> => await contactApi.get(id).json<Contact>();

const updateContactById = async (id: string, contact: Partial<Contact>): Promise<Contact> => {
  const dto = {
    lastname: contact.lastname,
    firstname: contact.firstname,
    phone: contact.phone,
    email: contact.email,
  };

  const response = await contactApi.patch(id, { json: dto });

  return response.json<Contact>();
};

const contactService = {
  getById: getContactById,
  updateById: updateContactById,
};

export { contactService };
