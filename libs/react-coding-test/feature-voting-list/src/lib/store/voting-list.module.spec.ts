import {
  votingListReducer,
  getVotingListStart,
  getVotingListFailure,
  getVotingListSuccess
} from './voting-list.module';

describe('votingList reducer', () => {
  it('should handle initial state', () => {
    expect(votingListReducer(undefined, { type: '' })).toMatchObject({
      entities: []
    });
  });

  it('should handle get votingList actions', () => {
    let state = votingListReducer(undefined, getVotingListStart());

    expect(state).toEqual({
      loaded: false,
      error: null,
      entities: []
    });

    state = votingListReducer(state, getVotingListSuccess([{ id: 1 }]));

    expect(state).toEqual({
      loaded: true,
      error: null,
      entities: [{ id: 1 }]
    });

    state = votingListReducer(state, getVotingListFailure('Uh oh'));

    expect(state).toEqual({
      loaded: true,
      error: 'Uh oh',
      entities: [{ id: 1 }]
    });
  });
});
