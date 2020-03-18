import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import styled from 'styled-components';
import { fetchCandidatesList, getVotingListModule } from './store';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureVotingListProps {}

const StyledReactCodingTestFeatureVotingList = styled.div`
  color: pink;
`;

export const ReactCodingTestFeatureVotingList = (
  props: ReactCodingTestFeatureVotingListProps
) => {
  const { candidates: candidatesAmount } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCandidatesList(Number(candidatesAmount)));
  });

  return (
    <DynamicModuleLoader modules={[getVotingListModule()]}>
      <StyledReactCodingTestFeatureVotingList>
        <h1>Welcome to react-coding-test-feature-voting-list component!</h1>
      </StyledReactCodingTestFeatureVotingList>
    </DynamicModuleLoader>
  );
};

export default ReactCodingTestFeatureVotingList;
