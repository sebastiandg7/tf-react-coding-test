import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PasswordInputProps {}

const StyledPasswordInput = styled.div`
  color: pink;
`;

export const PasswordInput = (props: PasswordInputProps) => {
  return (
    <StyledPasswordInput>
      <h1>Welcome to password-input component!</h1>
    </StyledPasswordInput>
  );
};

export default PasswordInput;
