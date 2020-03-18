import React from 'react';
import { render } from '@testing-library/react';

import VotingStats from './voting-stats';

describe(' VotingStats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VotingStats />);
    expect(baseElement).toBeTruthy();
  });
});
