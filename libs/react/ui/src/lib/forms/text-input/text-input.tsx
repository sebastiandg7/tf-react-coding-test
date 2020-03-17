import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TextInputProps {}

const StyledTextInput = styled.div`
  .txt-input {
    color: #333;
    font-size: 1.2rem;
    padding: 0.75rem 1rem;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
    border: none;
    display: block;
    border: 0.1rem solid #143055;
  }
`;

export const TextInput = (props: TextInputProps) => {
  return (
    <StyledTextInput>
      <input
        type="text"
        className="txt-input"
        id="name"
        required={true}
      />
    </StyledTextInput>
  );
};

export default TextInput;
