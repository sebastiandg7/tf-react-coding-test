import React from 'react';
import { TextInput, LoadingSpinner } from '@tf-test/react/ui';

import styled from 'styled-components';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

/* eslint-disable-next-line */
export interface SignupFormProps extends InjectedFormProps {}

const StyledSignupForm = styled.div`
  .lbl-input {
    display: table;
    margin: 2em auto 0;
  }

  .txt-input {
    margin: 5px auto 0;
  }

  .btn {
    display: block;
    background: #143055;
    color: #fff;
    padding: 0.6em 1.2em;
    min-width: 8.62em;
    text-align: center;
    border-radius: 5px;
    margin: 3.5em auto 0;
  }

  .btn.gray {
    background: #757575;
  }

  .loading-spinner {
    height: auto;
  }
`;

export const SignupForm = (props: SignupFormProps) => {
  const { handleSubmit } = props;

  return (
    <StyledSignupForm>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="lbl-input" htmlFor="username">
          Username
        </label>
        <Field
          id="signup-username"
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
          className="txt-input"
          name="password"
          type="password"
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

        <button className={`btn`}>Signup</button>
        <LoadingSpinner />
      </form>
    </StyledSignupForm>
  );
};

export default reduxForm({ form: 'signupForm' })(SignupForm);
