import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  color: pink;
`;

export const Home = (props: HomeProps) => {
  return (
    <StyledHome>
      <h1>Welcome to home component!</h1>
    </StyledHome>
  );
};

export default Home;
