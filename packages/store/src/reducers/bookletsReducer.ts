import { BookletActions } from '../actions/bookletActions';
import * as ActionType from '../actionTypes/bookletActionTypes';
import { initialAppState } from './initialState';
import { Block } from '../../interfaces/Block';

export const initialState = initialAppState.bookletState;

export default function bookletsReducer(state = initialState, action: BookletActions): Block[] {
  switch (action.type) {
    case ActionType.LOAD_BOOKLET_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
