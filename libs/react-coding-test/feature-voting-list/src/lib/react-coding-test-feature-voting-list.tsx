import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureVotingListProps {}

const StyledReactCodingTestFeatureVotingList = styled.div`
  color: pink;
`;

export const ReactCodingTestFeatureVotingList = (
  props: ReactCodingTestFeatureVotingListProps
) => {
  return (
    <StyledReactCodingTestFeatureVotingList>
      <h1>Welcome to react-coding-test-feature-voting-list component!</h1>
    </StyledReactCodingTestFeatureVotingList>
  );
};

export default ReactCodingTestFeatureVotingList;
