'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const labelVariants = cva(
  'text-foreground/60 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      width: {
        default: 'w-40',
        fit: 'w-fit',
      },
    },
    defaultVariants: {
      width: 'default',
    },
  }
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, width, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ width }), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
