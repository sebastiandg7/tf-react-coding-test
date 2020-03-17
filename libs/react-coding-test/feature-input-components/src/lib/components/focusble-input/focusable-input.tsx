import React, { useRef, useEffect } from 'react';

import styled from 'styled-components';
import { TextInput, TextInputProps } from '@tf-test/react/ui';

/* eslint-disable-next-line */
export interface FocusableInputProps extends TextInputProps {
  focused: boolean;
}

const StyledFocusableInput = styled.div``;

export const FocusableInput = (props: FocusableInputProps) => {
  const inputRef = useRef<HTMLInputElement>();

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
