import React from 'react';
import { TextInput, LoadingSpinner } from '@tf-test/react/ui';

import './signup-form.styles.scss';

/* eslint-disable-next-line */
export interface SignupFormProps {}

export const SignupForm = (props: SignupFormProps) => {
  return (
    <form className="signup-form" onSubmit={null}>
      <label className="lbl-input" htmlFor="username">
        Username
      </label>
      <TextInput
        id="signup-username"
        type="text"
        className="txt-input"
        name="username"
        placeholder="Username"
      />
      <label className="lbl-input" htmlFor="password">
        Password
      </label>
      <TextInput
        id="signup-password"
        type="password"
        className="txt-input"
        name="password"
        placeholder="Password"
      />
      <label className="lbl-input" htmlFor="phone">
        Phone Number
      </label>
      <TextInput
        id="signup-phone"
        className="txt-input"
        name="phone"
        type="phone"
        placeholder="(123) 456 78 90"
      />

      <button type="submit" className={`btn`}>
        Signup
      </button>
      <LoadingSpinner />
    </form>
  );
};

export default SignupForm;
