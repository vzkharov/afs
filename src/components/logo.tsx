import Image from 'next/image';

import { cn } from '~/lib/utils';
import type { StyleProps } from '~/lib/types';

type LogoProps = StyleProps & {
  size?: number;
};

const Logo = ({ size = 36, className }: LogoProps): JSX.Element => (
  <Image
    width={size}
    height={size}
    src='/logo.svg'
    alt='Oak tree logo'
    className={cn('w-9 h-9', className)}
  />
);

export { Logo };
