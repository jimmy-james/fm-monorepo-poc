import { Store } from 'redux';
import initialState from './reducers/initialState';
import actions from './actions';
import selectors from './selectors';
import configureStore from './configureStore';

function setup(): Store {
  const store = configureStore(initialState);
  return store;
}

const store = setup();

export default { initialState, store, actions, selectors };
