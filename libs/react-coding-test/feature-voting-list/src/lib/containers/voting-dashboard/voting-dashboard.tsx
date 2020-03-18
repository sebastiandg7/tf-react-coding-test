import { LoadingSpinner } from '@tf-test/react/ui';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';
import {
  multipleSortArray,
  MultipleSortParam
} from '@tf-test/shared/util-data';
import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import VotingList from '../../components/voting-list/voting-list';
import VotingStats from '../../components/voting-stats/voting-stats';
import {
  fetchCandidatesList,
  getDecreaseCandidateVotes,
  getIncreaseCandidateVotes,
  selectLastVotedCandidate,
  selectTotalVotes,
  selectVotingListCandidates,
  selectVotingListLoaded
} from '../../store';

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
export const useLastVotedCandidateId = () =>
  useSelector(selectLastVotedCandidate);
export const useCandidatesLoaded = () => useSelector(selectVotingListLoaded);

export const VotingDashboard = (props: VotingDashboardProps) => {
  const { candidates: candidatesAmount } = useParams();
  const dispatch = useDispatch();

  const candidates = useCandidates();
  const lastVotedCandidateId = useLastVotedCandidateId();
  const totalVotes = useTotalVotes();
  const loaded = useCandidatesLoaded();

  useEffect(() => {
    dispatch(fetchCandidatesList(Number(candidatesAmount)));
  }, []);

  return (
    <StyledVotingDashboard>
      {loaded ? (
        renderDashboard(candidates, lastVotedCandidateId, totalVotes, dispatch)
      ) : (
        <LoadingSpinner />
      )}
    </StyledVotingDashboard>
  );
};

const renderDashboard = (
  candidates: VotingCandidate[],
  lastVotedCandidateId: number,
  totalVotes: number,
  dispatch: Dispatch<any>
) => {
  const onCandidateUpVote = (candidateId: number) =>
    dispatch(getIncreaseCandidateVotes({ candidateId }));
  const onCandidateDownVote = (candidateId: number) =>
    dispatch(getDecreaseCandidateVotes({ candidateId }));

  const sortCandidatesBy: MultipleSortParam<VotingCandidate>[] = [
    {
      property: 'votes',
      direction: -1
    },
    {
      property: 'age',
      direction: -1
    }
  ];

  return (
    <>
      <VotingStats totalVotes={totalVotes} />
      <VotingList
        lastVotedCandidateId={lastVotedCandidateId}
        candidates={multipleSortArray(candidates, sortCandidatesBy)}
        onCandidateUpVote={onCandidateUpVote}
        onCandidateDownVote={onCandidateDownVote}
      />
    </>
  );
};

export default VotingDashboard;
