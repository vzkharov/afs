import { cn } from '~/lib/utils';
import type { ReactChildren, StyleProps } from '~/lib/types';

import { Button } from '~/components/ui/button';

const Sidebar = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <aside
    {...props}
    className={cn('flex flex-col h-full items-center justify-between px-1.5 py-5 bg-foreground', className)}
  >
    {children}
  </aside>
);

const SidebarColumn = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={cn(
      'flex flex-col items-center gap-5',
      'last-of-type:pt-5 last-of-type:border-t last-of-type:border-t-background/10',
      className
    )}
  >
    {children}
  </div>
);

type SidebarLinkProps = StyleProps & {
  active?: boolean;
  children: ReactChildren;
};

const SidebarLink = ({ children, active, className }: SidebarLinkProps) => (
  <Button
    size='icon'
    aria-checked={active}
    variant='default'
    className={cn(
      'w-9 h-9 rounded-sm hover:bg-background/10 focus-visible:bg-background/10 active:bg-background/20 aria-checked:bg-background/20',
      className
    )}
  >
    {children}
  </Button>
);

export { Sidebar, SidebarColumn, SidebarLink };
