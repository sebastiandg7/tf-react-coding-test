import { REGISTER_FORM_FEATURE_KEY } from '../register-form.module';
import { IRegisterFormState } from '../register-form.module.contract';
import { createSelector } from '@reduxjs/toolkit';

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
export const getRegisterFormState = (rootState: any): IRegisterFormState =>
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
