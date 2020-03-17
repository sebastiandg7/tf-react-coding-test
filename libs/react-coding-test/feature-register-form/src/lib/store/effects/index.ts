import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import {
  getRegisterFormStart,
  getRegisterFormSuccess,
  getRegisterFormFailure
} from '../actions';

/*
 * Export default effect, handled by redux-thunk.
 * You can replace this with your own effects solution.
 */
export const fetchRegisterForm = (): ThunkAction<
  void,
  any,
  null,
  Action<string>
> => async dispatch => {
  try {
    dispatch(getRegisterFormStart({ name: 'Name sent from thunk' }));
    // Replace this with your custom fetch call.
    // For example, `const data = await myApi.getRegisterForm`;
    // Right now we just load an empty array.
    const data = [];
    dispatch(getRegisterFormSuccess(data));
  } catch (err) {
    dispatch(getRegisterFormFailure(err));
  }
};
