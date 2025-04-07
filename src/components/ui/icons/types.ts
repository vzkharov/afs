import type { ComponentPropsWithoutRef, ElementType, FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type As = ElementType<any>;
type ReactPropsOf<T extends As> = ComponentPropsWithoutRef<T>;

type IconProps = ReactPropsOf<'svg'> & {
  size?: number | string;
};

type IconElement = FC<IconProps>;

export type { IconElement, IconProps };
