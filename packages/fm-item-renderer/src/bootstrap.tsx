import * as React from 'react';
import { render } from 'react-dom';
// import store from '@nextgen/store';
// import { Provider as ReduxProvider } from 'react-redux';
import { GlobalProvider } from '@coreym/benchmark';
import App from './App';

function initializeReactApp() {
  const appContainer = document.getElementById('appContainer');
  if (!appContainer) throw new Error('No #appContainer found in DOM');
  render(
    <GlobalProvider>
      {/* <ReduxProvider store={store.store}> */}
      <App />
      {/* </ReduxProvider> */}
    </GlobalProvider>,
    appContainer,
  );
}

initializeReactApp();
