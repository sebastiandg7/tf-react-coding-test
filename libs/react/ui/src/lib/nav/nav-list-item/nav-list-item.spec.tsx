import React from 'react';
import { render } from '@testing-library/react';

import NavListItem from './nav-list-item';

describe(' NavListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavListItem />);
    expect(baseElement).toBeTruthy();
  });
});
