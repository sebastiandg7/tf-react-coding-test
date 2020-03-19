import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SignupFormProps {}

const StyledSignupForm = styled.div`
  color: pink;
`;

export const SignupForm = (props: SignupFormProps) => {
  return (
    <StyledSignupForm>
      <h1>Welcome to signup-form component!</h1>
    </StyledSignupForm>
  );
};

export default SignupForm;
