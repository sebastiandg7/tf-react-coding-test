import { combineReducers } from '@reduxjs/toolkit';
import { IModule } from 'redux-dynamic-modules';
import { reducer as formReducer } from 'redux-form';
import { loadedReducer } from './reducers';
import { IRegisterFormAwareState } from './register-form.module.contract';

export const REGISTER_FORM_FEATURE_KEY = 'registerForm';

export function getRegisterFormModule(): IModule<IRegisterFormAwareState> {
  return {
    id: REGISTER_FORM_FEATURE_KEY,
    reducerMap: {
      [REGISTER_FORM_FEATURE_KEY]: combineReducers({
        form: formReducer
      })
    }
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  };
}
