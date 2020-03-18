import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface VotingStatsProps {
  totalVotes: number;
}

const StyledVotingStats = styled.div`
  color: black;
`;

export const VotingStats = (props: VotingStatsProps) => {
  return (
    <StyledVotingStats>
      <h1>{`Total votes: ${props.totalVotes}`}</h1>
    </StyledVotingStats>
  );
};

export default VotingStats;
