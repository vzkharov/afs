import React from 'react';

import { BaseIcon, type IconElement } from './_base';

const LoaderIcon: IconElement = (props) => (
  <BaseIcon
    {...props}
    viewBox='0 0 24 24'
  >
    <path d='M21 12a9 9 0 1 1-6.219-8.56' />
  </BaseIcon>
);

export { LoaderIcon };
