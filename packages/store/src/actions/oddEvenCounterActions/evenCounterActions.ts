import { Action } from 'redux';
import * as evenCounterActionTypes from '../../actionTypes/OddEvenCounterActionTypes/evenCounterActionTypes';
import { UIAction } from '../../../interfaces/stateMachine/UIAction';
//actions
export interface IncrementEvenCounterAction extends UIAction {
  type: typeof evenCounterActionTypes.INCREMENT_EVEN_COUNTER;
}
export interface DecrementEvenCounterAction extends UIAction {
  type: typeof evenCounterActionTypes.DECREMENT_EVEN_COUNTER;
}

//action creators
export const incrementEvenCounterAction = (): IncrementEvenCounterAction => {
  return { type: evenCounterActionTypes.INCREMENT_EVEN_COUNTER };
};
export const decrementEvenCounterAction = (): DecrementEvenCounterAction => {
  return { type: evenCounterActionTypes.DECREMENT_EVEN_COUNTER };
};

//union types
export type EvenCounterActions = IncrementEvenCounterAction | DecrementEvenCounterAction;
