import React from 'react';
import { render } from '@testing-library/react';

import NavLogo from './nav-logo';

describe(' NavLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavLogo />);
    expect(baseElement).toBeTruthy();
  });
});
