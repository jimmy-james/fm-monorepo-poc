import { Action } from 'redux';
import * as OddCounterActionTypes from '../../actionTypes/OddEvenCounterActionTypes/oddCounterActionTypes';
import { UIAction } from '../../../interfaces/stateMachine/UIAction';

//actions
export interface IncrementOddCounterAction extends UIAction {
  type: typeof OddCounterActionTypes.INCREMENT_ODD_COUNTER;
}
export interface DecrementOddCounterAction extends UIAction {
  type: typeof OddCounterActionTypes.DECREMENT_ODD_COUNTER;
}

//action creators
export const incrementOddCounterAction = (): IncrementOddCounterAction => {
  return { type: OddCounterActionTypes.INCREMENT_ODD_COUNTER };
};
export const decrementOddCounterAction = (): DecrementOddCounterAction => {
  return { type: OddCounterActionTypes.DECREMENT_ODD_COUNTER };
};

//union types
export type OddCounterActions = IncrementOddCounterAction | DecrementOddCounterAction;
