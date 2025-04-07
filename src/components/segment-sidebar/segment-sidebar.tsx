import Link from 'next/link';

import { cn } from '~/lib/utils';
import type { ReactChildren, StyleProps } from '~/lib/types';

import { Button } from '~/components/ui/button';

const SegmentSidebar = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <aside
    {...props}
    className={cn('flex flex-col h-full gap-5 pt-5 pb-6 px-5 bg-background shadow-soft-large', className)}
  >
    {children}
  </aside>
);

type SegmentSidebarHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
};

const SegmentSidebarHeader = ({ title, description, className, ...props }: SegmentSidebarHeaderProps) => (
  <div
    {...props}
    className={cn('flex flex-col w-full', className)}
  >
    <h2 className='h-6 font-bold text-md'>{title}</h2>
    {description ? <p className='font-normal text-xs'>{description}</p> : null}
  </div>
);

const SegmentSidebarNavigation = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <nav
    {...props}
    className={cn('flex flex-col gap-3 flex-1 w-full', className)}
  >
    {children}
  </nav>
);

type SegmentSidebarLinkProps = StyleProps & {
  href: string;
  active?: boolean;
  label: string;
  icon?: ReactChildren;
};

const SegmentSidebarLink = ({ href, label, icon, active = false }: SegmentSidebarLinkProps) => (
  <Button
    asChild
    variant={active ? 'default' : 'outline'}
    className='flex items-center justify-start gap-3 pl-3 pr-10 py-2.5 w-full'
  >
    <Link href={href}>
      {icon}
      <span className='flex-1 text-center font-semibold'>{label}</span>
    </Link>
  </Button>
);

const SegmentSidebarFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <footer
    {...props}
    className={cn('w-full text-center text-xs text-foreground/40', className)}
  />
);

export { SegmentSidebar, SegmentSidebarFooter, SegmentSidebarHeader, SegmentSidebarLink, SegmentSidebarNavigation };
