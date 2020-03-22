import { NotFound, LoadingSpinner } from '@tf-test/react/ui';
import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/home/home';
import NavigationBar from './components/navigation-bar/navigation-bar';
import RandomVotingList from './containers/random-voting-list/radom-voting-list';
import './styles/global-styles.scss';

const ReactCodingTestFeatureInputComponents = lazy(() =>
  import('@tf-test/react-coding-test/feature-input-components')
);

const ReactCodingTestFeatureVotingList = lazy(() =>
  import('@tf-test/react-coding-test/feature-voting-list')
);

const ReactCodingTestFeatureRegsiterForm = lazy(() =>
  import('@tf-test/react-coding-test/feature-register-form')
);

const StyledApp = styled.div`
  height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;

  main {
    overflow-y: auto;
    padding: 1em 10em;
    height: 100%;
  }

  @media only screen and (max-width: 800px) {
    main {
      padding: 1em 2em;
    }
  }
`;

export const App = () => {
  return (
    <StyledApp>
      <header>
        <NavigationBar />
      </header>
      <main>
        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route path="/" exact render={Home} />
            <Route
              path="/input-components"
              exact
              component={ReactCodingTestFeatureInputComponents}
            />
            <Route
              path="/voting-list/:candidates"
              exact
              component={ReactCodingTestFeatureVotingList}
            />
            <Route
              path="/register-form"
              component={ReactCodingTestFeatureRegsiterForm}
            />
            <Route path="/voting-list" exact component={RandomVotingList} />
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
