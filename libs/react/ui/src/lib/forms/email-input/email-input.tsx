import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface EmailInputProps {}

const StyledEmailInput = styled.div`
  color: pink;
`;

export const EmailInput = (props: EmailInputProps) => {
  return (
    <StyledEmailInput>
      <h1>Welcome to email-input component!</h1>
    </StyledEmailInput>
  );
};

export default EmailInput;
