import { combineReducers } from '@reduxjs/toolkit';
import { IModule } from 'redux-dynamic-modules';
import { entitiesReducer } from './reducers';
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
        loaded: entitiesReducer,
        error: entitiesReducer
      })
    }
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  };
}

export const initialVotingListState: IVotingListState = {
  entities: [],
  loaded: false,
  error: null
};
