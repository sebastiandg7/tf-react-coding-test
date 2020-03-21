import { TextInput, TextInputProps } from '@tf-test/react/ui';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FocusableInputProps extends TextInputProps {
  focused: boolean;
}

const StyledFocusableInput = styled.div``;

export const FocusableInput = (props: FocusableInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.focused) {
      inputRef.current.focus();
    }
  });
  return (
    <StyledFocusableInput>
      <TextInput ref={inputRef} {...props} />
    </StyledFocusableInput>
  );
};

export default FocusableInput;
