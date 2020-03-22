import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NotFoundProps {}

const StyledNotFound = styled.div`
  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h1, h2 {
    margin-top: 2em;
  }
`;

export const NotFound = (props: NotFoundProps) => {
  return (
    <StyledNotFound>
      <h1>Oops...</h1>
      <h2>The page you are looking for doesn't exists :(</h2>
    </StyledNotFound>
  );
};

export default NotFound;
