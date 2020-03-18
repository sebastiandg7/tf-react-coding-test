import { combineReducers } from '@reduxjs/toolkit';
import { IModule } from 'redux-dynamic-modules';
import { candidatesReducer, loadedReducer } from './reducers';
import { IVotingListAwareState } from './votin-list.module.contract';

export const VOTING_LIST_FEATURE_KEY = 'votingList';

export function getVotingListModule(): IModule<IVotingListAwareState> {
  return {
    id: VOTING_LIST_FEATURE_KEY,
    reducerMap: {
      [VOTING_LIST_FEATURE_KEY]: combineReducers({
        candidates: candidatesReducer,
        loaded: loadedReducer,
        error: null
      })
    }
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  };
}
