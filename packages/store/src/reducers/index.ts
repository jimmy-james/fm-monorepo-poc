import { combineReducers } from 'redux';
import { CounterReducer } from './counterReducer';

const rootReducer = combineReducers({
  counterState: CounterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
