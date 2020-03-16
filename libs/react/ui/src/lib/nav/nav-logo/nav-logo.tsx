import React, { ReactNode } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavLogoProps {
  children: ReactNode;
}

const StyledNavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-logo {
  }
`;

export const NavLogo = (props: NavLogoProps) => {
  return <StyledNavLogo>{props.children}</StyledNavLogo>;
};

export default NavLogo;
