import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-md font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-foreground text-background hover:bg-foreground/80 focus-visible:bg-foreground/70 active:bg-foreground/70',
        outline: [
          'border border-border/20 bg-transparent hover:text-brand-primary-hover hover:border-border/30 focus-visible:text-brand-primary focus-visible:border-brand-primary active:text-brand-primary active:border-brand-primary',
          'font-assistitive-button-mini font-semibold tracking-[0.48px] leading-5',
        ],
        ghost: 'text-foreground hover:bg-foreground/5 focus-visible:bg-primary-foreground active:bg-primary-foreground',
      },
      size: {
        default: 'w-[148px] h-10 px-3 py-3 rounded-sm [&_svg]:size-4',
        flat: 'w-fit h-fit py-1 px-2 text-xs rounded-sm [&_svg]:size-4',
        icon: 'w-8 h-8 rounded-full [&_svg]:size-5',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
