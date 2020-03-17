import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: pink;
  text-align: center;
  height: 25%;

  h1 {
    font-size: 2.5rem;
    color: #143055;
    font-weight: bold;
  }
`;

export const Home = (props: HomeProps) => {
  return (
    <StyledHome>
      <h1>Sebastián Duque Gutiérrez</h1>
    </StyledHome>
  );
};

export default Home;
