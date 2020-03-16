import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NotFoundProps {}

const StyledNotFound = styled.div`
  color: pink;
`;

export const NotFound = (props: NotFoundProps) => {
  return (
    <StyledNotFound>
      <h1>Welcome to not-found component!</h1>
    </StyledNotFound>
  );
};

export default NotFound;
