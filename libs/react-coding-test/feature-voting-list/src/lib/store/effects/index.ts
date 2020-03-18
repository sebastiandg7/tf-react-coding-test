import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import {
  getVotingListFailure,
  getVotingListStart,
  getVotingListSuccess
} from '../actions';

import { generateCandidates } from '@tf-test/shared/util-voting-candidates';

/*
 * Export default effect, handled by redux-thunk.
 * You can replace this with your own effects solution.
 */
export const fetchCandidatesList = (
  candidatesAmount: number
): ThunkAction<void, any, null, Action<string>> => async dispatch => {
  try {
    dispatch(getVotingListStart());
    const candidates = generateCandidates(candidatesAmount);
    dispatch(getVotingListSuccess({ candidates }));
  } catch (err) {
    dispatch(getVotingListFailure(err));
  }
};
