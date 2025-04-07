import * as React from 'react';

type HTMLSvgAttributes = React.SVGProps<SVGSVGElement>;

type IconProps = Omit<HTMLSvgAttributes, 'fill' | 'strokeWidth'> & {
  size?: number | string;
  strokeWidth?: number | string;
};

type IconElement<P = Record<string, unknown>> = React.FC<P & IconProps>;

const BaseIcon: IconElement = ({ size = '1em', strokeWidth = 1.5, viewBox = '0 0 20 20', ...props }) => (
  <svg
    strokeLinecap='round'
    strokeLinejoin='round'
    stroke='currentColor'
    {...props}
    fill='none'
    viewBox={viewBox}
    strokeWidth={strokeWidth}
    width={size}
    height={size}
    xmlns='http://www.w3.org/2000/svg'
  />
);

export { BaseIcon };
export type { IconElement, IconProps };
