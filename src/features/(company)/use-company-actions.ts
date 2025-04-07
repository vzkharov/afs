import { useState } from 'react';
import { toast } from 'sonner';

import type { Company } from '~/entities/company';
import { companyService } from '~/fetchers/company';

const useCompanyActions = (initialData: Company) => {
  const [optimisticCompany, setOptimisticCompany] = useState<Company>(initialData);

  const handleChangeCompany = async (_company: Partial<Company>) => {
    const updatedCompany = {
      ...optimisticCompany,
      ..._company,
      contract: {
        ...optimisticCompany.contract,
        ..._company.contract,
      },
    };

    setOptimisticCompany(updatedCompany);
  };

  const handleUpdateCompany = async (_company: Partial<Company>) => {
    handleChangeCompany(_company);

    const promise = companyService.updateById(optimisticCompany.id, _company);

    toast.promise(promise, {
      loading: 'Updating company...',
      success: 'Company updated',
      error: 'Failed to update company',
    });

    await promise.then((updatedCompany) => {
      setOptimisticCompany(updatedCompany);
    });
  };

  const handleRemoveCompany = async () => {
    const promise = companyService.removeById(optimisticCompany.id);

    toast.promise(promise, {
      loading: 'Removing company...',
      success: 'Company removed',
      error: 'Failed to remove company',
    });

    window.location.reload();
  };

  const handleUploadCompanyImage = async (_image: File) => {
    const promise = companyService.addImage(optimisticCompany.id, _image);

    toast.promise(promise, {
      loading: 'Uploading image...',
      success: 'Image uploaded',
      error: 'Failed to upload image',
    });

    await promise.then((uploadedImage) => {
      setOptimisticCompany({
        ...optimisticCompany,
        photos: [...optimisticCompany.photos, uploadedImage],
      });
    });
  };

  const handleRemoveCompanyImage = async (name: string) => {
    handleChangeCompany({
      photos: optimisticCompany.photos.filter((photo) => photo.name !== name),
    });

    const promise = companyService.removeImage(optimisticCompany.id, name);

    toast.promise(promise, {
      loading: 'Removing image...',
      success: 'Image removed',
      error: 'Failed to remove image',
    });

    await promise;
  };

  return {
    state: optimisticCompany,
    update: handleUpdateCompany,
    remove: handleRemoveCompany,
    removeImage: handleRemoveCompanyImage,
    uploadImage: handleUploadCompanyImage,
  };
};

export { useCompanyActions };
