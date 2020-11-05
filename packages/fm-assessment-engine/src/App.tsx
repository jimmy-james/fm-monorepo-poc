/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from '@coreym/benchmark';

const LoadingIndicator = React.lazy(() => import('./components/shared/LoadingIndicator'));

import Assessment from './views/Assessment';
import NoMatch from './views/NoMatch';

const App: React.FC = (): ReactElement => {
  return (
    <GlobalProvider>
      <Suspense fallback={LoadingIndicator}>
        <Router>
          <Switch>
            <Route
              path="/"
              component={(): ReactElement => {
                return <Assessment />;
              }}
            />
            <Route
              exact
              path="*"
              redirectPath="/not-found"
              component={(): ReactElement => {
                return <NoMatch />;
              }}
            />
          </Switch>
        </Router>
      </Suspense>
    </GlobalProvider>
  );
};

export default App;
