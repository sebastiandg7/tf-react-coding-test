import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactUiProps {}

const StyledReactUi = styled.div`
  color: pink;
`;

export const ReactUi = (props: ReactUiProps) => {
  return (
    <StyledReactUi>
      <h1>Welcome to react-ui component!</h1>
    </StyledReactUi>
  );
};

export default ReactUi;
