import { createStore, applyMiddleware, compose, CombinedState, Store } from 'redux';
import rootReducer from './reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //to ensure no state mutations exist in code in dev mode
import thunk from 'redux-thunk';
import { AppState } from './interfaces/AppState';
import initialState from './reducers/initialState';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function configureStore(initialState: AppState): Store<CombinedState<unknown>> {
  const composeMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, initialState, composeMiddleware(applyMiddleware(thunk)));
}

export { initialState };
