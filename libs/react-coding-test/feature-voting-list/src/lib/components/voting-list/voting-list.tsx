import React from 'react';

import styled from 'styled-components';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';

/* eslint-disable-next-line */
export interface VotingListProps {
  candidates: VotingCandidate[];
}

const StyledVotingList = styled.div`
  color: black;
`;

export const VotingList = (props: VotingListProps) => {
  return (
    <StyledVotingList>
      <ul>
        {props.candidates.map(candidate => (
          <li key={candidate.id}>
            <pre>{JSON.stringify(candidate)}</pre>
          </li>
        ))}
      </ul>
    </StyledVotingList>
  );
};

export default VotingList;
