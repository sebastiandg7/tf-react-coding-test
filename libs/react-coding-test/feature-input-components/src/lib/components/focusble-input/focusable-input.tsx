import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FocusableInputProps {}

const StyledFocusableInput = styled.div`
  color: pink;
`;

export const FocusableInput = (props: FocusableInputProps) => {
  return (
    <StyledFocusableInput>
      <h1>Welcome to focusable-input component!</h1>
    </StyledFocusableInput>
  );
};

export default FocusableInput;
