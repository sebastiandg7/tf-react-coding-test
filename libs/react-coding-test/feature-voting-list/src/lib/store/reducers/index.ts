import { createReducer } from '@reduxjs/toolkit';
import { getVotingListStart, getVotingListSuccess } from '../actions';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';

const initialState: VotingCandidate[] = [];

export const candidatesReducer = createReducer(initialState, builder => {
  builder.addCase(getVotingListSuccess, (state: VotingCandidate[], action) => {
    const { candidates } = action.payload;
    return candidates;
  });
});

export const loadedReducer = createReducer(false, builder => {
  builder.addCase(getVotingListStart, (state: boolean, action) => {
    console.log(`It works... Loaded`);
  });
});
