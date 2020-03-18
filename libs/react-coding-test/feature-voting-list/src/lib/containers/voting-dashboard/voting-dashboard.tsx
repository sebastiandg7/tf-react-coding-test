import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  fetchCandidatesList,
  selectTotalVotes,
  selectVotingListLoaded
} from '../../store';

import styled from 'styled-components';
/* eslint-disable-next-line */
export interface VotingDashboardProps {}

const StyledVotingDashboard = styled.div`
  color: black;
`;

export const VotingDashboard = (props: VotingDashboardProps) => {
  const { candidates: candidatesAmount } = useParams();
  const dispatch = useDispatch();

  const totalVotes = useTotalVotes();
  const loaded = useCandidatesLoaded();
  console.log(`Total votes ${totalVotes}. Loaded? ${loaded}`);

  useEffect(() => {
    dispatch(fetchCandidatesList(Number(candidatesAmount)));
  }, []);

  return (
    <StyledVotingDashboard>
      <h1>
        Welcome to voting-dashboard component!{' '}
        {loaded ? `Total votes: ${totalVotes}` : 'Loading...'}
      </h1>
    </StyledVotingDashboard>
  );
};

export const useTotalVotes = () => useSelector(selectTotalVotes);
export const useCandidatesLoaded = () => useSelector(selectVotingListLoaded);

export default VotingDashboard;
