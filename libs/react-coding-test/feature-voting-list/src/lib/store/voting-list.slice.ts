import {
  createSlice,
  createSelector,
  Action,
  PayloadAction
} from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

export const VOTING_LIST_FEATURE_KEY = 'votingList';

/*
 * Change this from `any` if there is a more specific error type.
 */
export type VotingListError = any;

/*
 * Update these interfaces according to your requirements.
 */
export interface VotingListEntity {
  id: number;
}

export interface VotingListState {
  entities: VotingListEntity[];
  loaded: boolean;
  error: VotingListError;
}

export const initialVotingListState: VotingListState = {
  entities: [],
  loaded: false,
  error: null
};

export const votingListSlice = createSlice({
  name: VOTING_LIST_FEATURE_KEY,
  initialState: initialVotingListState as VotingListState,
  reducers: {
    getVotingListStart: (state, action: PayloadAction<undefined>) => {
      state.loaded = false;
    },
    getVotingListSuccess: (
      state,
      action: PayloadAction<VotingListEntity[]>
    ) => {
      state.loaded = true;
      state.entities = action.payload;
    },
    getVotingListFailure: (state, action: PayloadAction<VotingListError>) => {
      state.error = action.payload;
    }
  }
});

/*
 * Export reducer for store configuration.
 */
export const votingListReducer = votingListSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * const dispatch = useDispatch();
 * dispatch(getVotingListSuccess([{ id: 1 }]));
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const {
  getVotingListStart,
  getVotingListSuccess,
  getVotingListFailure
} = votingListSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * const entities = useSelector(selectVotingListEntities);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
export const getVotingListState = (rootState: any): VotingListState =>
  rootState[VOTING_LIST_FEATURE_KEY];

export const selectVotingListEntities = createSelector(
  getVotingListState,
  s => s.entities
);

export const selectVotingListLoaded = createSelector(
  getVotingListState,
  s => s.loaded
);

export const selectVotingListError = createSelector(
  getVotingListState,
  s => s.error
);

/*
 * Export default effect, handled by redux-thunk.
 * You can replace this with your own effects solution.
 */
export const fetchVotingList = (): ThunkAction<
  void,
  any,
  null,
  Action<string>
> => async dispatch => {
  try {
    dispatch(getVotingListStart());
    // Replace this with your custom fetch call.
    // For example, `const data = await myApi.getVotingList`;
    // Right now we just load an empty array.
    const data = [];
    dispatch(getVotingListSuccess(data));
  } catch (err) {
    dispatch(getVotingListFailure(err));
  }
};
