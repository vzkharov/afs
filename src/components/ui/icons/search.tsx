import React from 'react';

import { BaseIcon, type IconElement } from './_base';

const SearchIcon: IconElement = (props) => (
  <BaseIcon
    {...props}
    viewBox='0 0 24 24'
  >
    <circle
      cx='11'
      cy='11'
      r='8'
    />
    <path d='m21 21-4.3-4.3' />
  </BaseIcon>
);

export { SearchIcon };
