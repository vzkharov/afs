import { createApi } from '~/lib/api';
import type { Company } from '~/entities/company';
import { Photo } from '~/entities/photo';

const companyApi = createApi('/companies');

// Simulate a remote API call
// Cause we don't have a real API
const getCompanyIds = async (): Promise<Pick<Company, 'id'>[]> => [{ id: '12' }];

const getCompanyById = async (id: string): Promise<Company> => await companyApi.get(id).json<Company>();

const updateCompanyById = async (id: string, company: Partial<Company>): Promise<Company> => {
  const dto = {
    name: company.name,
    shortName: company.shortName,
    businessEntity: company.businessEntity,
    type: company.type,
    contract: company.contract,
  };

  const response = await companyApi.patch(id, { json: dto });

  return response.json<Company>();
};

const removeCompanyById = async (id: string): Promise<void> => {
  await companyApi.delete(id);
};

const addCompanyImage = async (id: string, image: File): Promise<Photo> => {
  const formData = new FormData();
  formData.append('file', image);

  return await companyApi.post(`${id}/image`, { body: formData }).json<Photo>();
};

const removeCompanyImage = async (id: string, name: string): Promise<void> => {
  await companyApi.delete(`${id}/image/${name}`);
};

const companyService = {
  getAll: getCompanyIds,
  getById: getCompanyById,
  updateById: updateCompanyById,
  removeById: removeCompanyById,
  addImage: addCompanyImage,
  removeImage: removeCompanyImage,
};

export { companyService };
