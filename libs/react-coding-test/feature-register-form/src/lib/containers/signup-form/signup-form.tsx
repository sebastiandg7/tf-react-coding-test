import React from 'react';
import { TextInput, LoadingSpinner } from '@tf-test/react/ui';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

import './signup-form.styles.scss';
import { REGISTER_FORM_FEATURE_KEY } from '../../store';

/* eslint-disable-next-line */
export interface SignupFormProps extends InjectedFormProps {}

export const SignupForm = (props: SignupFormProps) => {
  const { handleSubmit, pristine, submitting, dirty } = props;

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label className="lbl-input" htmlFor="username">
        Username
      </label>
      <Field
        id="signup-username"
        type="text"
        className="txt-input"
        name="username"
        placeholder="Username"
        component={TextInput}
      />
      <label className="lbl-input" htmlFor="password">
        Password
      </label>
      <Field
        id="signup-password"
        type="password"
        className="txt-input"
        name="password"
        placeholder="Password"
        component={TextInput}
      />
      <label className="lbl-input" htmlFor="phone">
        Phone Number
      </label>
      <Field
        id="signup-phone"
        className="txt-input"
        name="phone"
        type="phone"
        placeholder="(123) 456 78 90"
        component={TextInput}
      />

      <button type="submit" className={`btn`}>
        Signup
      </button>
      <LoadingSpinner />
      {`Pristine: ${pristine} - Submitting ${submitting} - Dirty ${dirty}`}
    </form>
  );
};

export default reduxForm({
  form: 'signupForm',
  getFormState: state => state[REGISTER_FORM_FEATURE_KEY].form
})(SignupForm);
