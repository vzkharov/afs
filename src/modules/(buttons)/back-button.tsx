import { ChevronLeftIcon } from '~/components/ui/icons/chevron-left';
import { Button, type ButtonProps } from '~/components/ui/button';

const BackButton = ({ className, variant = 'ghost', ...props }: ButtonProps) => (
  <Button
    {...props}
    size='icon'
    variant={variant}
    className={className}
  >
    <ChevronLeftIcon />
  </Button>
);

export { BackButton };
