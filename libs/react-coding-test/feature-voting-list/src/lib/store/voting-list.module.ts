import { combineReducers } from '@reduxjs/toolkit';
import { IModule } from 'redux-dynamic-modules';
import { entitiesReducer, loadedReducer } from './reducers';
import {
  IVotingListAwareState,
  IVotingListState
} from './votin-list.module.contract';

export const VOTING_LIST_FEATURE_KEY = 'votingList';

export function getVotingListModule(): IModule<IVotingListAwareState> {
  return {
    id: VOTING_LIST_FEATURE_KEY,
    reducerMap: {
      [VOTING_LIST_FEATURE_KEY]: combineReducers({
        entities: entitiesReducer,
        loaded: loadedReducer,
        error: null
      })
    }
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  };
}
