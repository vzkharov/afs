import { useState } from 'react';

import { XIcon } from '~/components/ui/icons/x';
import { EditIcon } from '~/components/ui/icons/edit';
import { CheckIcon } from '~/components/ui/icons/check';
import { Button, type ButtonProps } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

import type { FormProps } from '~/lib/types';

type WithEditableCardProps<T> = {
  title: string;
  value: T;
  onValueChange?: (value: Partial<T>) => unknown | Promise<unknown>;
};

const withEditableCard = <T,>(
  FormComponent: React.ComponentType<FormProps<T>>,
  DisplayComponent: React.ComponentType<T>
) => {
  return function EditableComponent({ title, value, onValueChange }: WithEditableCardProps<T>) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [localValue, setLocalValue] = useState<T>(value);

    const handleEdit = () => {
      setIsEditing(true);
      setLocalValue(value);
    };

    const handleConfirm = () => {
      setIsEditing(false);
      onValueChange?.(localValue);
    };

    const handleReject = () => {
      setIsEditing(false);
      setLocalValue(value);
    };

    const handleEditValue = (value: Partial<T>) => {
      setLocalValue((prev) => ({ ...prev, ...value }));
    };

    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {isEditing ? (
            <>
              <ConfirmButton onClick={handleConfirm} />
              <RejectButton onClick={handleReject} />
            </>
          ) : (
            <EditButton onClick={handleEdit} />
          )}
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <FormComponent
              value={localValue}
              onValueChange={handleEditValue}
            />
          ) : (
            // @ts-expect-error InstincstAttributes ?
            <DisplayComponent {...localValue} />
          )}
        </CardContent>
      </Card>
    );
  };
};

const ConfirmButton = (props: ButtonProps) => (
  <Button
    size='flat'
    variant='outline'
    {...props}
  >
    <CheckIcon />
    <span>Save changes</span>
  </Button>
);

const RejectButton = (props: ButtonProps) => (
  <Button
    size='flat'
    variant='outline'
    {...props}
  >
    <XIcon />
    <span>Cancel</span>
  </Button>
);

const EditButton = (props: ButtonProps) => (
  <Button
    size='flat'
    variant='outline'
    {...props}
  >
    <EditIcon />
    <span>Edit</span>
  </Button>
);

export { withEditableCard };
