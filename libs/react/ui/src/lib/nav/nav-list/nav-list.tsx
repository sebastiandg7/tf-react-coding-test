import React, { ReactNode } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavListProps {
  children: ReactNode;
}

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavList = (props: NavListProps) => {
  return <StyledNavList>{props.children}</StyledNavList>;
};

export default NavList;
