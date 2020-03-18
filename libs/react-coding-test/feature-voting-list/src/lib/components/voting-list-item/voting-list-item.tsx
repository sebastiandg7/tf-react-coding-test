import React from 'react';

import styled from 'styled-components';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';

/* eslint-disable-next-line */
export interface VotingListItemProps {
  candidate: VotingCandidate
}

const StyledVotingListItem = styled.div`
  color: pink;
`;

export const VotingListItem = (props: VotingListItemProps) => {
  return (
    <StyledVotingListItem>
      <h1>Welcome to voting-list-item component!</h1>
    </StyledVotingListItem>
  );
};

export default VotingListItem;
