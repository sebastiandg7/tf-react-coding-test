import { doSignup, SignupError } from '@tf-test/shared/data-access-signup-api';
import React, { useState } from 'react';
import styled from 'styled-components';
import SignupForm, {
  SignupFormSchema
} from './containers/signup-form/signup-form';

const StyledReactCodingTestFeatureRegisterForm = styled.div`
  .signup-error {
    color: red;
    text-align: center;
    margin-top: 0.5em;
  }
`;

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureRegisterFormProps {}

export const ReactCodingTestFeatureRegisterForm = (
  props: ReactCodingTestFeatureRegisterFormProps
) => {
  const [signupError, setSignupError] = useState<SignupError>(null);

  const onSignup = async (values: SignupFormSchema) => {
    setSignupError(null);
    const { username, email, phone } = values;
    try {
      await doSignup({
        username,
        email,
        phone_number: Number(phone)
      });
    } catch (err) {
      setSignupError(err);
    }
  };

  return (
    <StyledReactCodingTestFeatureRegisterForm>
      <SignupForm onSubmit={onSignup} />
      {signupError ? <p className="signup-error">{signupError.message}</p> : ''}
    </StyledReactCodingTestFeatureRegisterForm>
  );
};

export default ReactCodingTestFeatureRegisterForm;
