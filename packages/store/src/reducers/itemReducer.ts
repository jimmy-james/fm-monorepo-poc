import { ItemActions } from '../actions/itemsActions';
import * as ActionType from '../actionTypes/itemsActionTypes';
import { initialAppState } from './initialState';
import { RootItemConfig } from '../../interfaces/renderer/UIElement';

export const initialState = initialAppState.itemState;

export default function itemReducer(state = initialState, action: ItemActions): RootItemConfig {
  switch (action.type) {
    case ActionType.LOAD_ITEM_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
