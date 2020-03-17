import { createAction } from '@reduxjs/toolkit';

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * const dispatch = useDispatch();
 * dispatch(getRegisterFormSuccess([{ id: 1 }]));
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */

export const getRegisterFormStart = createAction(
  '[Voting List] Start',
  (payload: { name: string }) => ({ payload })
);

export const getRegisterFormSuccess = createAction(
  '[Voting List] Success',
  (payload: any[]) => ({ payload })
);
export const getRegisterFormFailure = createAction(
  '[Voting List] Failure',
  (payload: any) => ({ payload })
);
