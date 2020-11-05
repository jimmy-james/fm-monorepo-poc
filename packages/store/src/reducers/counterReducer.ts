import { CounterState } from '../interfaces/CounterState';
import { initialAppState } from './initialState';
import { CounterActions } from '../actions/counterActions';

export const initialState: CounterState = initialAppState.counterState;

export const CounterReducer = (state = initialState, action: CounterActions): CounterState => {
  if (action.type === 'INCREMENT') return { ...state, count: state.count + 1 };
  if (action.type === 'DECREMENT') return { ...state, count: state.count - 1 };

  return state;
};
