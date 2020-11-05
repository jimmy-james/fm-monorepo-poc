import 'regenerator-runtime/runtime';
import * as React from 'react';
import { render } from 'react-dom';
import configureStore, { initialState } from '@jimmy-james/store';
import { Provider as ReduxProvider } from 'react-redux';
import { GlobalProvider } from '@coreym/benchmark';
import App from './App';

const store = configureStore(initialState);

function initializeReactApp(): void {
  const appContainer = document.getElementById('appContainer');
  if (!appContainer) throw new Error('No #appContainer found in DOM');
  render(
    <ReduxProvider store={store}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ReduxProvider>,
    appContainer,
  );
}

void initializeReactApp();
