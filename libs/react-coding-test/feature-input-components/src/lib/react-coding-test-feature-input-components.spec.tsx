import React from 'react';
import { render } from '@testing-library/react';

import ReactCodingTestFeatureInputComponents from './react-coding-test-feature-input-components';

describe(' ReactCodingTestFeatureInputComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactCodingTestFeatureInputComponents />);
    expect(baseElement).toBeTruthy();
  });
});
