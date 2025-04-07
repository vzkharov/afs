import type { ReactChildren } from '~/lib/types';

import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

type EditCompanyNameModalProps = {
  companyId: string;
  initialTitle: string;

  onReject?: (id: string) => void;
  onConfirm?: (id: string, title: string) => void;

  children: ReactChildren;
};

const EditCompanyNameModal = ({
  companyId,
  initialTitle,
  children,
  onReject,
  onConfirm,
}: EditCompanyNameModalProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const title = formData.get('title') as string;

    if (title) {
      onConfirm?.(companyId, title);
    } else {
      onReject?.(companyId);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent asChild>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Specify the Organization&apos;s name</DialogTitle>
          </DialogHeader>
          <Input
            id='title'
            type='text'
            name='title'
            defaultValue={initialTitle}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type='button'
                variant='outline'
              >
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                type='submit'
                variant='default'
              >
                Save changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { EditCompanyNameModal };
