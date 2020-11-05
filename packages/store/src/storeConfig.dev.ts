import { initialAppState } from './reducers/initialState';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //to ensure no state mutations exist in code in dev mode
import thunk from 'redux-thunk';
import { AppState } from 'interfaces/AppState';
import { BehaviorSubject } from 'rxjs';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  initialAppState,
  composeMiddleware(applyMiddleware(thunk, reduxImmutableStateInvariant())),
);
//Creates RxJs stream from the redux appState
const _reduxState = new BehaviorSubject<AppState>(initialAppState);
export const appStateStream$ = _reduxState.asObservable();
export const appState$ = _reduxState.asObservable();

//TODO: 1. unsubscribe? may not be necessary because this is a terminally resident module in the app.
//      2. This may not be the best place for this streaming of appState. It should be where app selectors are defined.
store.subscribe(() => _reduxState.next(store.getState()));

export default function configureStore(initialState: AppState): typeof store {
  return store;
}

export function getStore(): typeof store {
  return store;
}
