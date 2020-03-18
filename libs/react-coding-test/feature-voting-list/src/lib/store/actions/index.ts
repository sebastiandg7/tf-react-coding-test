import { createAction } from '@reduxjs/toolkit';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * const dispatch = useDispatch();
 * dispatch(getVotingListSuccess([{ candidates: [{...}, {...}] }]));
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */

export const getVotingListStart = createAction(
  '[Voting List - Candidates] Fetch Start'
);

export const getVotingListSuccess = createAction(
  '[Voting List - Candidates] Fetch Success',
  (payload: { candidates: VotingCandidate[] }) => ({ payload })
);
export const getVotingListFailure = createAction(
  '[Voting List - Candidates] Fetch Failure',
  (payload: any) => ({ payload })
);

export const getIncreaseCandidateVotes = createAction(
  '[Voting List - Candidates] Increase Votes',
  (payload: { candidateId: number }) => ({ payload })
);

export const getDecreaseCandidateVotes = createAction(
  '[Voting List - Candidates] Decrease Votes',
  (payload: { candidateId: number }) => ({ payload })
);
