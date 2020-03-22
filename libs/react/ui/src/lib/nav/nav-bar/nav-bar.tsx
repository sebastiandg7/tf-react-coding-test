import React, { ReactNode } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavBarProps {
  children: ReactNode;
}

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5em;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const NavBar = (props: NavBarProps) => {
  return <StyledNavBar>{props.children}</StyledNavBar>;
};

export default NavBar;
