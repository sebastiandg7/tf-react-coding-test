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
  const {
    candidates,
    lastVotedCandidateId,
    onCandidateUpVote,
    onCandidateDownVote
  } = props;

  return (
    <StyledVotingList>
      <ul>
        {candidates.map(candidate => (
          <VotingListItem
            key={candidate.id}
            isLastVoted={lastVotedCandidateId === candidate.id}
            candidate={candidate}
            onCandidateUpVote={onCandidateUpVote}
            onCandidateDownVote={onCandidateDownVote}
          />
        ))}
      </ul>
    </StyledVotingList>
  );
};

export default VotingList;
