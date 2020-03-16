import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavBar, NavList, NavListItem, NavLogo } from '@tf-test/react/ui';

import { ReactComponent as ReactLogo } from '../../react-logo.svg';

/* eslint-disable-next-line */
export interface NavigationBarProps {}

export const NavigationBar = (props: NavigationBarProps) => {
  return (
    <NavBar>
      <NavLogo>
        <ReactLogo className="nav-logo" width="75" height="75" />
        <h1>React Coding Test</h1>
      </NavLogo>
      <NavList>
        <NavListItem>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/feature-input-components" activeClassName="active">
            Input Components
          </NavLink>
        </NavListItem>
      </NavList>
    </NavBar>
  );
};

export default NavigationBar;
