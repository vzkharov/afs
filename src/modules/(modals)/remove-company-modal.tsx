'use client';

import type { ReactChildren } from '~/lib/types';

import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogClose,
} from '~/components/ui/dialog';

type RemoveCompanyModalProps = {
  companyId: string;

  onReject?: (id: string) => void;
  onConfirm?: (id: string) => void;

  children: ReactChildren;
};

const RemoveCompanyModal = ({ companyId, children, onReject, onConfirm }: RemoveCompanyModalProps) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Remove the Organization?</DialogTitle>
        <DialogDescription>Are you sure you want to remove this Organization?</DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <DialogClose asChild>
          <Button
            type='submit'
            variant='outline'
            onClick={() => onReject?.(companyId)}
          >
            No
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button
            type='button'
            variant='default'
            onClick={() => onConfirm?.(companyId)}
          >
            Yes, remove
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export { RemoveCompanyModal };
