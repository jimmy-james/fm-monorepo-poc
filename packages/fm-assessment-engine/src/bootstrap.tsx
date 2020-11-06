import * as React from 'react';
import { render } from 'react-dom';
import store from '@nextgen/store';
import { Provider as ReduxProvider } from 'react-redux';
import { GlobalProvider } from '@coreym/benchmark';
import App from './App';
console.log('STORE ASSESSMENT ', store.store);

function initializeReactApp(): void {
  const appContainer = document.getElementById('appContainer');
  if (!appContainer) throw new Error('No #appContainer found in DOM');
  render(
    <ReduxProvider store={store.store}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ReduxProvider>,
    appContainer,
  );
}

void initializeReactApp();
