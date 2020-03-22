import React from 'react';
import { render } from '@testing-library/react';

import SignupSuccess from './signup-success';

describe(' SignupSuccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignupSuccess />);
    expect(baseElement).toBeTruthy();
  });
});
