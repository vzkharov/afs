import { cn } from '~/lib/utils';

import { ChevronIcon } from '~/components/ui/icons/chevron';
import { Button, type ButtonProps } from '~/components/ui/button';

const BackButton = ({ className, variant = 'ghost', ...props }: ButtonProps) => (
  <Button
    {...props}
    size='icon'
    variant={variant}
    className={cn('[&_svg]:size-5', className)}
  >
    <ChevronIcon />
  </Button>
);

export { BackButton };
