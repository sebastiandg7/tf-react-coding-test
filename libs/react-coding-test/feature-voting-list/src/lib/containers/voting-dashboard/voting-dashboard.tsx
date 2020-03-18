import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { LoadingSpinner } from '@tf-test/react/ui';
import {
  fetchCandidatesList,
  selectTotalVotes,
  selectVotingListLoaded,
  selectVotingListCandidates
} from '../../store';

import styled from 'styled-components';
/* eslint-disable-next-line */
export interface VotingDashboardProps {}

const StyledVotingDashboard = styled.div`
  color: black;
`;

export const useTotalVotes = () => useSelector(selectTotalVotes);
export const useCandidates = () => useSelector(selectVotingListCandidates);
export const useCandidatesLoaded = () => useSelector(selectVotingListLoaded);

export const VotingDashboard = (props: VotingDashboardProps) => {
  const { candidates: candidatesAmount } = useParams();
  const dispatch = useDispatch();

  const candidates = useCandidates();
  const totalVotes = useTotalVotes();
  const loaded = useCandidatesLoaded();

  useEffect(() => {
    dispatch(fetchCandidatesList(Number(candidatesAmount)));
  }, []);

  const renderDashboard = () => {
    return (
      <>
        <h1>{loaded ? `Total votes: ${totalVotes}` : 'Loading...'}</h1>
      </>
    );
  };

  return (
    <StyledVotingDashboard>
      {loaded ? renderDashboard() : <LoadingSpinner />}
    </StyledVotingDashboard>
  );
};

export default VotingDashboard;
