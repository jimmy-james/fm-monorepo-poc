import { Action } from 'redux';
import { DECREMENT, INCREMENT } from '../actionTypes/counterActionTypes';

export interface Counter extends Action {
  type: typeof DECREMENT | typeof INCREMENT;
  payload?: null;
}

export const IncrementCounter = (): Counter => {
  return {
    type: INCREMENT,
    payload: null,
  };
};

export const DecrementCounter = (): Counter => {
  return {
    type: DECREMENT,
    payload: null,
  };
};

export type CounterActions = Counter;
