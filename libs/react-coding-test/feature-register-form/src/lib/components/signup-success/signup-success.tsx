import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SignupSuccessProps {}

const StyledSignupSuccess = styled.div`
  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 2rem;
  }
`;

export const SignupSuccess = (props: SignupSuccessProps) => {
  return (
    <StyledSignupSuccess>
      <h1>Welcome!</h1>
      <h2>You signed up successfuly</h2>
    </StyledSignupSuccess>
  );
};

export default SignupSuccess;
