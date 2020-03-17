import { createReducer } from '@reduxjs/toolkit';
import { getVotingListStart } from '../actions';
import { VotingListEntity } from '../votin-list.module.contract';

const initialState: VotingListEntity[] = [];

export const entitiesReducer = createReducer(initialState, builder => {
  builder.addCase(getVotingListStart, (state: VotingListEntity[], action) => {
    console.log(`It works... Name: ${action.payload.name}`);
  });
});

export const loadedReducer = createReducer(false, builder => {
  builder.addCase(getVotingListStart, (state: boolean, action) => {
    console.log(`It works... Loaded`);
  });
});
