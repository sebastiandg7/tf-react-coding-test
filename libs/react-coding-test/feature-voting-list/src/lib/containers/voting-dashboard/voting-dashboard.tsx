import React, { useEffect, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { LoadingSpinner } from '@tf-test/react/ui';
import {
  fetchCandidatesList,
  getIncreaseCandidateVotes,
  getDecreaseCandidateVotes,
  selectTotalVotes,
  selectVotingListLoaded,
  selectVotingListCandidates
} from '../../store';

import styled from 'styled-components';
import VotingList from '../../components/voting-list/voting-list';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';
import VotingStats from '../../components/voting-stats/voting-stats';

/* eslint-disable-next-line */
export interface VotingDashboardProps {}

const StyledVotingDashboard = styled.div`
  color: black;

  h1 {
    font-size: 1.5rem;
  }
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

  return (
    <StyledVotingDashboard>
      {loaded ? (
        renderDashboard(candidates, totalVotes, dispatch)
      ) : (
        <LoadingSpinner />
      )}
    </StyledVotingDashboard>
  );
};

const renderDashboard = (
  candidates: VotingCandidate[],
  totalVotes: number,
  dispatch: Dispatch<any>
) => {
  const onCandidateUpVote = (candidateId: number) =>
    dispatch(getIncreaseCandidateVotes({ candidateId }));
  const onCandidateDownVote = (candidateId: number) =>
    dispatch(getDecreaseCandidateVotes({ candidateId }));

  return (
    <>
      <VotingStats totalVotes={totalVotes} />
      <VotingList
        candidates={candidates}
        onCandidateUpVote={onCandidateUpVote}
        onCandidateDownVote={onCandidateDownVote}
      />
    </>
  );
};

export default VotingDashboard;
