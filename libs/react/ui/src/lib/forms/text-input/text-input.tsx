import React, { useRef } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {}

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

export const TextInput = React.forwardRef(
  (props: TextInputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <StyledTextInput>
        <input
          ref={ref}
          type="text"
          className="txt-input"
          id="name"
          required={true}
          {...props}
        />
      </StyledTextInput>
    );
  }
);

export default TextInput;
