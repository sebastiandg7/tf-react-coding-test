import React from 'react';
import { render } from '@testing-library/react';

import VotingListItem from './voting-list-item';

describe(' VotingListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VotingListItem />);
    expect(baseElement).toBeTruthy();
  });
});
