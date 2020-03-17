import { REGISTER_FORM_FEATURE_KEY } from './register-form.module';

export type RegisterFormError = any;

export interface RegisterFormEntity {
  id: number;
}

export interface IRegisterFormState {
  entities: RegisterFormEntity[];
  loaded: boolean;
  error: RegisterFormError;
}

export interface IRegisterFormAwareState {
  [REGISTER_FORM_FEATURE_KEY]: IRegisterFormState;
}
