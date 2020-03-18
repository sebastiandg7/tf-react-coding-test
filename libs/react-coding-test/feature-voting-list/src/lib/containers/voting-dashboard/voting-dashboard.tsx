import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface VotingDashboardProps {}

const StyledVotingDashboard = styled.div`
  color: pink;
`;

export const VotingDashboard = (props: VotingDashboardProps) => {
  return (
    <StyledVotingDashboard>
      <h1>Welcome to voting-dashboard component!</h1>
    </StyledVotingDashboard>
  );
};

export default VotingDashboard;
