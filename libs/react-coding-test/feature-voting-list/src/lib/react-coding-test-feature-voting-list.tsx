import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import VotingDashboard from './containers/voting-dashboard/voting-dashboard';
import { getVotingListModule } from './store';

import './fontawesome-icons';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureVotingListProps {}

export const ReactCodingTestFeatureVotingList = (
  props: ReactCodingTestFeatureVotingListProps
) => {
  return (
    <DynamicModuleLoader modules={[getVotingListModule()]}>
      <VotingDashboard />
    </DynamicModuleLoader>
  );
};

export default ReactCodingTestFeatureVotingList;
