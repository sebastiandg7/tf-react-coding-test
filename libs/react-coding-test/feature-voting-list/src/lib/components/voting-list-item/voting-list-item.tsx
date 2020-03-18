import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';

/* eslint-disable-next-line */
export interface VotingListItemProps {
  candidate: VotingCandidate;
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
`;

export const VotingListItem = (props: VotingListItemProps) => {
  const { candidate } = props;
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
            <FontAwesomeIcon icon="arrow-down" color="red"/>
            <span className="candidate-votes-count">{candidate.votes}</span>
            <FontAwesomeIcon icon="arrow-up" color="green"/>
          </div>
        </div>
      </div>
    </StyledVotingListItem>
  );
};

export default VotingListItem;
