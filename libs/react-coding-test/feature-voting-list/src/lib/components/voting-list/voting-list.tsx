import React from 'react';

import styled from 'styled-components';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';
import VotingListItem from '../voting-list-item/voting-list-item';

/* eslint-disable-next-line */
export interface VotingListProps {
  candidates: VotingCandidate[];
  lastVotedCandidateId: number;
  onCandidateUpVote: (candidateId: number) => void;
  onCandidateDownVote: (candidateId: number) => void;
}

const StyledVotingList = styled.div``;

export const VotingList = (props: VotingListProps) => {
  return (
    <StyledVotingList>
      <ul>
        {props.candidates.map(candidate => (
          <VotingListItem
            key={candidate.id}
            isLastVoted={props.lastVotedCandidateId === candidate.id}
            candidate={candidate}
            onCandidateUpVote={props.onCandidateUpVote}
            onCandidateDownVote={props.onCandidateDownVote}
          />
        ))}
      </ul>
    </StyledVotingList>
  );
};

export default VotingList;
