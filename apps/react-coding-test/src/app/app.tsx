import React, { Suspense, lazy } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import './styles/global-styles.scss';
import NavigationBar from './components/navigation-bar/navigation-bar';

const ReactCodingTestFeatureInputComponents = lazy(() =>
  import('@tf-test/react-coding-test/feature-input-components')
);

const ReactCodingTestFeatureVotingList = lazy(() =>
  import('@tf-test/react-coding-test/feature-voting-list')
);

const StyledApp = styled.div`
  /*
 * Remove template code below
 */

  font-family: sans-serif;
  min-width: 300px;
  max-width: 700px;
  margin: 50px auto;

  header {
    background-color: #143055;
    color: white;
    padding: 5px;
    border-radius: 3px;
  }

  main {
    padding: 0 36px;
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
      <main></main>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Suspense fallback={<span>Loading...</span>}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <div>This is the generated root route.</div>}
          />
          <Route
            path="/input-components"
            component={ReactCodingTestFeatureInputComponents}
          />
          <Route
            path="/voting-list"
            component={ReactCodingTestFeatureVotingList}
          />
          {/* END: routes */}
        </Switch>
      </Suspense>
    </StyledApp>
  );
};

export default App;
