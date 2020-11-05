import { combineReducers } from 'redux';
import appLoadingReducer from './appLoadingReducer';
import assessmentReducer from './assessmentReducer';
import bookletsReducer from './bookletsReducer';
import itemReducer from './itemReducer';
import itemHeadersReducer from './itemHeadersReducer';
import responsesReducer from './responsesReducer';
// import toolbarReducer from './toolbarReducer';
import toolSettingsReducer from './toolSettingsReducer';
import evenCounterReducer from './OddEvenCounterReducers/evenCounterReducer';
import oddCounterReducer from './OddEvenCounterReducers/oddCounterReducer';
import errorReducer from './APIErrorReducer';

const rootReducer = combineReducers({
  appLoadingState: appLoadingReducer,
  assessmentState: assessmentReducer,
  itemState: itemReducer,
  itemHeadersState: itemHeadersReducer,
  responsesState: responsesReducer,
  // toolbarState: toolbarReducer,
  evenCounterState: evenCounterReducer,
  oddCounterState: oddCounterReducer,
  bookletState: bookletsReducer,
  errorState: errorReducer,
  toolSettings: toolSettingsReducer,

  // rootItemConfig: itemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
