import { ItemHeaderActions } from '../actions/itemHeaderActions';
import * as ActionType from '../actionTypes/itemHeaderActionTypes';
import { initialAppState } from './initialState';
import { ItemHeader } from '../../interfaces/ItemHeader';

export const initialState = initialAppState.itemHeadersState;

export default function itemHeadersReducer(state = initialState, action: ItemHeaderActions): ItemHeader[] {
  switch (action.type) {
    case ActionType.LOAD_ITEM_HEADERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
