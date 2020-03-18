import { VOTING_LIST_FEATURE_KEY } from '../voting-list.module';
import { createSelector } from '@reduxjs/toolkit';
import { IVotingListState } from '../votin-list.module.contract';

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * const entities = useSelector(selectVotingListEntities);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
export const getVotingListState = (rootState: any): IVotingListState =>
  rootState[VOTING_LIST_FEATURE_KEY];

export const selectVotingListCandidates = createSelector(
  getVotingListState,
  s => s.candidates
);

export const selectLastVotedCandidate = createSelector(
  getVotingListState,
  s => s.lastVotedCantidateId
);

export const selectVotingListLoaded = createSelector(
  getVotingListState,
  s => s.loaded
);

export const selectVotingListError = createSelector(
  getVotingListState,
  s => s.error
);

export const selectTotalVotes = createSelector(
  selectVotingListCandidates,
  candidates =>
    candidates.reduce(
      (accumulated, currentCandidate) => accumulated + currentCandidate.votes,
      0
    )
);
