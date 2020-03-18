import React from 'react';
import { render } from '@testing-library/react';

import VotingDashboard from './voting-dashboard';

describe(' VotingDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VotingDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
