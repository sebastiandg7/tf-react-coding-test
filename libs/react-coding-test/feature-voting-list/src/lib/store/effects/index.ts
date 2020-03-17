import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import {
  getVotingListFailure,
  getVotingListStart,
  getVotingListSuccess
} from '../actions';

/*
 * Export default effect, handled by redux-thunk.
 * You can replace this with your own effects solution.
 */
export const fetchVotingList = (): ThunkAction<
  void,
  any,
  null,
  Action<string>
> => async dispatch => {
  try {
    dispatch(getVotingListStart({ name: 'test' }));
    // Replace this with your custom fetch call.
    // For example, `const data = await myApi.getVotingList`;
    // Right now we just load an empty array.
    const data = [];
    dispatch(getVotingListSuccess(data));
  } catch (err) {
    dispatch(getVotingListFailure(err));
  }
};
