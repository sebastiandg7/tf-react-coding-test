import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';

/* eslint-disable-next-line */
export interface VotingListItemProps {
  candidate: VotingCandidate;
  onCandidateUpVote: (candidateId: number) => void;
  onCandidateDownVote: (candidateId: number) => void;
}

const StyledVotingListItem = styled.div`
  margin: 10px 0px;

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .candidate-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    padding: 0.5em 0em 0.5em 1em;
    border-radius: 4px;
  }

  .candidate-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 5em;
    max-width: 33em;
  }

  .candidate-slogan {
    font-style: italic;
  }

  .candidate-votes {
    border-left: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 7em;
    text-align: center;
  }

  .candidate-votes > h3 {
    font-weight: bold;
  }

  .candidate-votes-count {
    margin: 0 1em;
  }

  .btn-vote:hover {
    cursor: pointer;
  }

  .btn-vote.btn-disabled:hover {
    cursor: not-allowed;
  }
`;

export const VotingListItem = (props: VotingListItemProps) => {
  const { candidate } = props;

  const candidateCanDownVote = canDownVote(candidate);
  const candidateCanUpVote = canUpVote(candidate);

  return (
    <StyledVotingListItem>
      <div className="candidate-card">
        <div className="candidate-info">
          <h2>{`${candidate.firstname} ${candidate.lastname}`}</h2>
          <p className="candidate-slogan">{candidate.slogan}</p>
          <span className="candidate-age">Age: {candidate.age}</span>
        </div>
        <div className="candidate-votes">
          <h3>Votes</h3>
          <div className="votes-control">
            <FontAwesomeIcon
              className={`btn-vote ${
                candidateCanDownVote ? '' : 'btn-disabled'
              }`}
              icon="arrow-down"
              color={candidateCanDownVote ? 'red' : 'gray'}
              onClick={() => {
                if (candidateCanDownVote) {
                  props.onCandidateDownVote(candidate.id);
                }
              }}
            />
            <span className="candidate-votes-count">{candidate.votes}</span>
            <FontAwesomeIcon
              className={`btn-vote ${candidateCanUpVote ? '' : 'btn-disabled'}`}
              icon="arrow-up"
              color={candidateCanUpVote ? 'green' : 'gray'}
              onClick={() => {
                if (candidateCanUpVote) {
                  props.onCandidateUpVote(candidate.id);
                }
              }}
            />
          </div>
        </div>
      </div>
    </StyledVotingListItem>
  );
};

const canUpVote = (candidate: VotingCandidate) => candidate.votes < 20;
const canDownVote = (candidate: VotingCandidate) => candidate.votes > 0;

export default VotingListItem;
