import React from 'react';

import styled from 'styled-components';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';
import VotingListItem from '../voting-list-item/voting-list-item';

/* eslint-disable-next-line */
export interface VotingListProps {
  candidates: VotingCandidate[];
}

const StyledVotingList = styled.div`
`;

export const VotingList = (props: VotingListProps) => {
  return (
    <StyledVotingList>
      <ul>
        {props.candidates.map(candidate => (
          <VotingListItem key={candidate.id} candidate={candidate} />
        ))}
      </ul>
    </StyledVotingList>
  );
};

export default VotingList;
