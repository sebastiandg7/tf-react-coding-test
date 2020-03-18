import { createReducer } from '@reduxjs/toolkit';
import {
  getVotingListStart,
  getVotingListSuccess,
  getVotingListFailure,
  getIncreaseCandidateVotes,
  getDecreaseCandidateVotes
} from '../actions';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';

const initialState: VotingCandidate[] = [];

export const candidatesReducer = createReducer(initialState, builder => {
  builder.addCase(getVotingListSuccess, (state: VotingCandidate[], action) => {
    const { candidates } = action.payload;
    return candidates;
  });

  builder.addCase(
    getIncreaseCandidateVotes,
    (state: VotingCandidate[], action) => {
      state.forEach(candidate => {
        if (candidate.id === action.payload.candidateId) {
          candidate.votes++;
        }
      });
    }
  );

  builder.addCase(
    getDecreaseCandidateVotes,
    (state: VotingCandidate[], action) => {
      state.forEach(candidate => {
        if (candidate.id === action.payload.candidateId) {
          candidate.votes--;
        }
      });
    }
  );
});

export const lastCandidateReducer = createReducer(-1, builder => {
  builder.addCase(getIncreaseCandidateVotes, (state: number, action) => {
    return action.payload.candidateId;
  });

  builder.addCase(getDecreaseCandidateVotes, (state: number, action) => {
    return action.payload.candidateId;
  });
});

export const loadedReducer = createReducer(false, builder => {
  builder.addCase(getVotingListStart, (state: boolean, action) => {
    return false;
  });

  builder.addCase(getVotingListSuccess, (state: boolean, action) => {
    return true;
  });

  builder.addCase(getVotingListFailure, (state: boolean, action) => {
    return true;
  });
});
