import * as EvenCounterActionTypes from '../../actionTypes/OddEvenCounterActionTypes/evenCounterActionTypes';
import { EvenCounterActions } from '../../actions/oddEvenCounterActions/evenCounterActions';
import { initialAppState } from '../initialState';

import { EvenCounterState } from '../../../interfaces/OddEvenCounter';

export const initialState: EvenCounterState = initialAppState.evenCounterState;

export default function evenCounterReducer(state = initialState, action: EvenCounterActions): EvenCounterState {
  switch (action.type) {
    case EvenCounterActionTypes.INCREMENT_EVEN_COUNTER:
      return { ...state, evenState: { even: { counter: state.evenState.even.counter + 2 } } };
    case EvenCounterActionTypes.DECREMENT_EVEN_COUNTER:
      return { ...state, evenState: { even: { counter: state.evenState.even.counter - 2 } } };
    default:
      return state;
  }
}
