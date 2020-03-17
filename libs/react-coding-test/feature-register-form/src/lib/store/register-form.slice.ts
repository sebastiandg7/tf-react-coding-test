import {
  createSlice,
  createSelector,
  Action,
  PayloadAction
} from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

export const REGISTER_FORM_FEATURE_KEY = 'registerForm';

/*
 * Change this from `any` if there is a more specific error type.
 */
export type RegisterFormError = any;

/*
 * Update these interfaces according to your requirements.
 */
export interface RegisterFormEntity {
  id: number;
}

export interface RegisterFormState {
  entities: RegisterFormEntity[];
  loaded: boolean;
  error: RegisterFormError;
}

export const initialRegisterFormState: RegisterFormState = {
  entities: [],
  loaded: false,
  error: null
};

export const registerFormSlice = createSlice({
  name: REGISTER_FORM_FEATURE_KEY,
  initialState: initialRegisterFormState as RegisterFormState,
  reducers: {
    getRegisterFormStart: (state, action: PayloadAction<undefined>) => {
      state.loaded = false;
    },
    getRegisterFormSuccess: (
      state,
      action: PayloadAction<RegisterFormEntity[]>
    ) => {
      state.loaded = true;
      state.entities = action.payload;
    },
    getRegisterFormFailure: (
      state,
      action: PayloadAction<RegisterFormError>
    ) => {
      state.error = action.payload;
    }
  }
});

/*
 * Export reducer for store configuration.
 */
export const registerFormReducer = registerFormSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * const dispatch = useDispatch();
 * dispatch(getRegisterFormSuccess([{ id: 1 }]));
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const {
  getRegisterFormStart,
  getRegisterFormSuccess,
  getRegisterFormFailure
} = registerFormSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * const entities = useSelector(selectRegisterFormEntities);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
export const getRegisterFormState = (rootState: any): RegisterFormState =>
  rootState[REGISTER_FORM_FEATURE_KEY];

export const selectRegisterFormEntities = createSelector(
  getRegisterFormState,
  s => s.entities
);

export const selectRegisterFormLoaded = createSelector(
  getRegisterFormState,
  s => s.loaded
);

export const selectRegisterFormError = createSelector(
  getRegisterFormState,
  s => s.error
);

/*
 * Export default effect, handled by redux-thunk.
 * You can replace this with your own effects solution.
 */
export const fetchRegisterForm = (): ThunkAction<
  void,
  any,
  null,
  Action<string>
> => async dispatch => {
  try {
    dispatch(getRegisterFormStart());
    // Replace this with your custom fetch call.
    // For example, `const data = await myApi.getRegisterForm`;
    // Right now we just load an empty array.
    const data = [];
    dispatch(getRegisterFormSuccess(data));
  } catch (err) {
    dispatch(getRegisterFormFailure(err));
  }
};
