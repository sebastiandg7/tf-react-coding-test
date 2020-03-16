import React, { ReactNode } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavListItemProps {
  children: ReactNode;
}

const StyledNavListItem = styled.li`
  margin-left: 2em;
`;

export const NavListItem = (props: NavListItemProps) => {
  return <StyledNavListItem>{props.children}</StyledNavListItem>;
};

export default NavListItem;
