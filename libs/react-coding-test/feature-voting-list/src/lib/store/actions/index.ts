import { createAction } from '@reduxjs/toolkit';

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * const dispatch = useDispatch();
 * dispatch(getVotingListSuccess([{ id: 1 }]));
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */

export const getVotingListStart = createAction(
  '[Voting List] Start',
  (payload: { name: string }) => ({ payload })
);

export const getVotingListSuccess = createAction(
  '[Voting List] Success',
  (payload: any[]) => ({ payload })
);
export const getVotingListFailure = createAction(
  '[Voting List] Failure',
  (payload: any) => ({ payload })
);
