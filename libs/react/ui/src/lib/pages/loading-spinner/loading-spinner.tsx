import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import ScaleLoader from 'react-spinners/ScaleLoader';

/* eslint-disable-next-line */
export interface LoadingSpinnerProps extends HTMLProps<HTMLDivElement> {}

const StyledLoadingSpinner = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .wrapper {
    display: flex;
    justify-content: space-around;
  }
`;

export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  return (
    <StyledLoadingSpinner>
      <div className={`wrapper ${props.className}`} {...props}>
        <ScaleLoader color={'#143055'} />
      </div>
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
