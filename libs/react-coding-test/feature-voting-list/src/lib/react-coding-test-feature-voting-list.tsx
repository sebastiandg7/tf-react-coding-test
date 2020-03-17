import React from 'react';

import styled from 'styled-components';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getVotingListModule } from './store';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureVotingListProps {}

const StyledReactCodingTestFeatureVotingList = styled.div`
  color: pink;
`;

export const ReactCodingTestFeatureVotingList = (
  props: ReactCodingTestFeatureVotingListProps
) => {
  return (
    <DynamicModuleLoader modules={[getVotingListModule()]}>
      <StyledReactCodingTestFeatureVotingList>
        <h1>Welcome to react-coding-test-feature-voting-list component!</h1>
      </StyledReactCodingTestFeatureVotingList>
    </DynamicModuleLoader>
  );
};

export default ReactCodingTestFeatureVotingList;
