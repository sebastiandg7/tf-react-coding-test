import React, { Suspense, lazy } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import './styles/global-styles.scss';
import NavigationBar from './components/navigation-bar/navigation-bar';
import Home from './components/home/home';
import { NotFound } from '@tf-test/react/ui';

const ReactCodingTestFeatureInputComponents = lazy(() =>
  import('@tf-test/react-coding-test/feature-input-components')
);

const ReactCodingTestFeatureVotingList = lazy(() =>
  import('@tf-test/react-coding-test/feature-voting-list')
);

const ReactCodingTestFeatureRegsiterForm = lazy(() =>
  import('@tf-test/react-coding-test/feature-regsiter-form')
);

const StyledApp = styled.div`
  height: 100%;
  min-width: 300px;
  max-width: 800px;
  margin: 50px auto;

  header {
    background-color: #143055;
    color: white;
    padding: 5px;
    border-radius: 3px;
  }

  main {
    height: 100%;
    padding: 1em 3em;
  }
`;

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.styled-components file.
   */
  return (
    <StyledApp>
      <header>
        <NavigationBar />
      </header>
      <main>
        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <Route path="/" exact render={Home} />
            <Route
              path="/input-components"
              exact
              component={ReactCodingTestFeatureInputComponents}
            />
            <Route
              path="/voting-list"
              exact
              component={ReactCodingTestFeatureVotingList}
            />
            <Route
              path="/register-form"
              exact
              component={ReactCodingTestFeatureRegsiterForm}
            />
            <Route path="/404" exact component={NotFound} />
            <Redirect from="*" to="/404" />
            {/* END: routes */}
          </Switch>
        </Suspense>
      </main>
    </StyledApp>
  );
};

export default App;
