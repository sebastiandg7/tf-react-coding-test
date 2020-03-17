import React from 'react';
import { render } from '@testing-library/react';

import ReactCodingTestFeatureRegisterForm from './react-coding-test-feature-register-form';

describe(' ReactCodingTestFeatureRegsiterForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactCodingTestFeatureRegisterForm />);
    expect(baseElement).toBeTruthy();
  });
});
