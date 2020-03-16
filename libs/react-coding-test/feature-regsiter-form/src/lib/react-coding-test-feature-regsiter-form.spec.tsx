import React from 'react';
import { render } from '@testing-library/react';

import ReactCodingTestFeatureRegsiterForm from './react-coding-test-feature-regsiter-form';

describe(' ReactCodingTestFeatureRegsiterForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactCodingTestFeatureRegsiterForm />);
    expect(baseElement).toBeTruthy();
  });
});
