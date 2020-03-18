import React from 'react';
import { render } from '@testing-library/react';

import RadomVotingList from './radom-voting-list';

describe(' RadomVotingList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadomVotingList />);
    expect(baseElement).toBeTruthy();
  });
});
