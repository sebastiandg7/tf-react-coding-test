import { REGISTER_FORM_FEATURE_KEY } from './register-form.module';
import { FormStateMap } from 'redux-form';

export type RegisterFormError = any;

export interface IRegisterFormState {
  form: FormStateMap;
  loaded: boolean;
  error: RegisterFormError;
}

export interface IRegisterFormAwareState {
  [REGISTER_FORM_FEATURE_KEY]: IRegisterFormState;
}
