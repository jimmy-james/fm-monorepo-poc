import { AssessmentActions } from '../actions/assessmentActions';
import * as ActionType from '../actionTypes/assessmentActionTypes';
import { initialAppState } from './initialState';
import { Assessment } from '../../interfaces/Assessment';

export const initialState = initialAppState.assessmentState;

export default function assessmentReducer(state = initialState, action: AssessmentActions): Assessment {
  switch (action.type) {
    case ActionType.LOAD_PREV_ITEM:
      if (state.activeItemSequence > 0) {
        return {
          ...state,
          activeItemSequence: state.activeItemSequence - 1,
        };
      }
    case ActionType.LOAD_NEXT_ITEM:
      return {
        ...state,
        activeItemSequence: state.activeItemSequence + 1,
      };
    default:
      return state;
  }
}
