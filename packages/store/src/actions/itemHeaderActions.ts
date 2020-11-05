import { ActionCreator } from 'redux';
import { LOAD_ITEM_HEADERS_SUCCESS, LOAD_ITEM_HEADERS } from '../actionTypes/itemHeaderActionTypes';
import { ItemHeader } from '../../interfaces/ItemHeader';
import { UIAction, TargetModule } from '../../interfaces/stateMachine/UIAction';

/** Type Interfaces */
export interface LoadItemHeaders extends UIAction {
  type: typeof LOAD_ITEM_HEADERS;
  handledIn: TargetModule;
}

export interface LoadItemHeadersSuccessAction extends UIAction<ItemHeader[]> {
  type: typeof LOAD_ITEM_HEADERS_SUCCESS;
  payload: ItemHeader[];
  handledIn: TargetModule;
}

/** Action Creators */
export const loadItemHeaders: ActionCreator<UIAction> = () => {
  return { type: LOAD_ITEM_HEADERS, handledIn: TargetModule.EFFECT };
};

export const loadItemHeadersSuccess: ActionCreator<UIAction<ItemHeader[]>> = (itemHeaders?: ItemHeader[]) => {
  return { type: LOAD_ITEM_HEADERS_SUCCESS, payload: itemHeaders, handledIn: TargetModule.STORE };
};

export default {
  loadItemHeaders,
};

export type ItemHeaderActions = LoadItemHeaders | LoadItemHeadersSuccessAction;
