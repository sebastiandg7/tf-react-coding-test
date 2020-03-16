import React, { ReactNode } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavListItemProps {
  children: ReactNode;
}

const StyledNavListItem = styled.li`
  margin-left: 2em;

  a {
    border-radius: 3px;
    padding: 0.2em;
  }

  a:focus {
    border-color: #fff;
    background-color: #143055;
    color: #fff;
  }

  a:hover,
  a.active {
    background-color: #fff;
    color: #143055;
  }


`;

export const NavListItem = (props: NavListItemProps) => {
  return <StyledNavListItem>{props.children}</StyledNavListItem>;
};

export default NavListItem;
