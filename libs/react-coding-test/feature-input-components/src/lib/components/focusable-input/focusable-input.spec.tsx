import React from 'react';
import { render } from '@testing-library/react';

import FocusableInput from './focusable-input';

describe(' FocusableInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FocusableInput focused={false} />);
    expect(baseElement).toBeTruthy();
  });
});
