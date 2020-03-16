import React from 'react';
import { render } from '@testing-library/react';

import NavList from './nav-list';

describe(' NavList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavList />);
    expect(baseElement).toBeTruthy();
  });
});
