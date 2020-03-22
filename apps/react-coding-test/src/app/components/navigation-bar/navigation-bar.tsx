import { NavBar, NavList, NavListItem, NavLogo } from '@tf-test/react/ui';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../react-logo.svg';

import styled from 'styled-components';

const StyledNavBar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #143055;
  color: white;
  padding: 5px;

  @media only screen and (max-width: 800px) {
    .nav-list {
      flex-direction: column;
    }

    .nav-list-item {
      margin: 0.5em auto;
    }
  }
`;

/* eslint-disable-next-line */
export interface NavigationBarProps {}

export const NavigationBar = (props: NavigationBarProps) => {
  return (
    <StyledNavBar>
      <NavBar>
        <NavLogo>
          <ReactLogo className="nav-logo" width="75" height="75" />
          <h1>React Coding Test</h1>
        </NavLogo>
        <NavList className="nav-list">
          <NavListItem className="nav-list-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </NavListItem>
          <NavListItem className="nav-list-item">
            <NavLink to="/input-components" activeClassName="active">
              Input Components
            </NavLink>
          </NavListItem>
          <NavListItem className="nav-list-item">
            <NavLink to="/voting-list" activeClassName="active">
              Voting List
            </NavLink>
          </NavListItem>
          <NavListItem className="nav-list-item">
            <NavLink to="/register-form" activeClassName="active">
              Register Form
            </NavLink>
          </NavListItem>
        </NavList>
      </NavBar>
    </StyledNavBar>
  );
};

export default NavigationBar;
