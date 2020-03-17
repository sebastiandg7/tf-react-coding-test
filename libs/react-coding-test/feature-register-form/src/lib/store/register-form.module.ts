import {
  IRegisterFormState,
  IRegisterFormAwareState
} from './register-form.module.contract';
import { IModule } from 'redux-dynamic-modules';
import { combineReducers } from '@reduxjs/toolkit';
import { entitiesReducer } from './reducers';

export const REGISTER_FORM_FEATURE_KEY = 'registerForm';

export function getRegisterFormModule(): IModule<IRegisterFormAwareState> {
  return {
    id: REGISTER_FORM_FEATURE_KEY,
    reducerMap: {
      [REGISTER_FORM_FEATURE_KEY]: combineReducers({
        entities: entitiesReducer,
        loaded: null,
        error: null
      })
    }
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  };
}

export const initialRegisterFormState: IRegisterFormState = {
  entities: [],
  loaded: false,
  error: null
};
