export interface VotingListEntity {
  id: number;
}

export interface IVotingListState {
  entities: VotingListEntity[];
  loaded: boolean;
  error: VotingListError;
}

export interface IVotingListAwareState {
  [VOTING_LIST_FEATURE_KEY]: IVotingListState;
}
