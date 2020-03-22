import React from 'react';
import { render } from '@testing-library/react';

import ReactUtilHelpers from './react-util-helpers';

describe(' ReactUtilHelpers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactUtilHelpers />);
    expect(baseElement).toBeTruthy();
  });
});
