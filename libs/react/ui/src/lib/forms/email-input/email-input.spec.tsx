import React from 'react';
import { render } from '@testing-library/react';

import EmailInput from './email-input';

describe(' EmailInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmailInput />);
    expect(baseElement).toBeTruthy();
  });
});
