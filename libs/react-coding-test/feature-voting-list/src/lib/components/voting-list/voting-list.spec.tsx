import React from 'react';
import { render } from '@testing-library/react';

import VotingList from './voting-list';

describe(' VotingList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VotingList />);
    expect(baseElement).toBeTruthy();
  });
});
