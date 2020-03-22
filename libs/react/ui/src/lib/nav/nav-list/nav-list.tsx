import React, { ReactNode, HTMLProps } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavListProps extends HTMLProps<HTMLUListElement> {
  children: ReactNode;
}

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavList = (props: NavListProps) => {
  const { className, children } = props;
  return <StyledNavList className={className}>{children}</StyledNavList>;
};

export default NavList;
