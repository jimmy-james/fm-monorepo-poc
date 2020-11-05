import * as OddCounterActionTypes from '../../actionTypes/OddEvenCounterActionTypes/oddCounterActionTypes';
import { OddCounterActions } from '../../actions/oddEvenCounterActions/oddCounterActions';
import { initialAppState } from '../initialState';
import { OddCounterState } from '../../../interfaces/OddEvenCounter';

export const initialState: OddCounterState = initialAppState.oddCounterState;

export default function oddCounterReducer(state = initialState, action: OddCounterActions): OddCounterState {
  switch (action.type) {
    case OddCounterActionTypes.INCREMENT_ODD_COUNTER:
      return { ...state, oddState: { odd: { counter: state.oddState.odd.counter + 2 } } };
    case OddCounterActionTypes.DECREMENT_ODD_COUNTER:
      return { ...state, oddState: { odd: { counter: state.oddState.odd.counter - 2 } } };
    default:
      return state;
  }
}
