import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

import { LoaderIcon } from './icons/loader';

interface SpinnerProps extends VariantProps<typeof spinnerVariants>, VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
}

const Spinner = ({ size, show, children, className }: SpinnerProps) => (
  <span className={spinnerVariants({ show })}>
    <LoaderIcon className={cn(loaderVariants({ size }), className)} />
    {children}
  </span>
);

const spinnerVariants = cva('flex-col items-center justify-center', {
  variants: { show: { true: 'flex', false: 'hidden' } },
  defaultVariants: { show: true },
});

const loaderVariants = cva('animate-spin text-brand-primary', {
  variants: { size: { default: 'w-7 h-7' } },
  defaultVariants: { size: 'default' },
});

export { loaderVariants, Spinner };
export type { SpinnerProps };
