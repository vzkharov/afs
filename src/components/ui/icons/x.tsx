import React from 'react';

import { BaseIcon, type IconElement } from './_base';

const XIcon: IconElement = (props) => (
  <BaseIcon {...props}>
    <path d='M15.625 4.375L4.375 15.625' />
    <path d='M15.625 15.625L4.375 4.375' />
  </BaseIcon>
);

export { XIcon };
