import React from 'react';
import { render } from '@testing-library/react';

import ReactCodingTestFeatureVotingList from './react-coding-test-feature-voting-list';

describe(' ReactCodingTestFeatureVotingList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactCodingTestFeatureVotingList />);
    expect(baseElement).toBeTruthy();
  });
});
