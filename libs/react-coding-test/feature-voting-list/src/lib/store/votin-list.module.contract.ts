import { VOTING_LIST_FEATURE_KEY } from './voting-list.module';
import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';

export type VotingListError = any;

export interface IVotingListState {
  candidates: VotingCandidate[];
  lastVotedCantidateId: number;
  loaded: boolean;
  error: VotingListError;
}

export interface IVotingListAwareState {
  [VOTING_LIST_FEATURE_KEY]: IVotingListState;
}
