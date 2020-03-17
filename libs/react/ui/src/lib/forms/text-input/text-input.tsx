import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TextInputProps {}

const StyledTextInput = styled.div`
  color: pink;
`;

export const TextInput = (props: TextInputProps) => {
  return (
    <StyledTextInput>
      <h1>Welcome to text-input component!</h1>
    </StyledTextInput>
  );
};

export default TextInput;
