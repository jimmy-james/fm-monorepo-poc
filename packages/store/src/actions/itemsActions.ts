import { ActionCreator } from 'redux';
import {
  LOAD_ITEM,
  LOAD_ITEM_SUCCESS,
  LOAD_PREV_ITEM_SUCCESS,
  LOAD_NEXT_ITEM_SUCCESS,
} from '../actionTypes/itemsActionTypes';
import * as itemInterfaces from '../../interfaces/Item';
import { TargetModule, UIAction } from '../../interfaces/stateMachine/UIAction';

// action type interfaces
export interface LoadItem extends UIAction {
  type: typeof LOAD_ITEM;
  handledIn: TargetModule;
}

export interface LoadItemSuccessAction extends UIAction<itemInterfaces.Item> {
  type: typeof LOAD_ITEM_SUCCESS;
  payload: itemInterfaces.Item;
  handledIn: TargetModule;
}

export interface LoadPrevItemSuccessAction extends UIAction {
  type: typeof LOAD_PREV_ITEM_SUCCESS;
}

export interface LoadNextItemSuccessAction extends UIAction {
  type: typeof LOAD_NEXT_ITEM_SUCCESS;
}

/** action creators */
export const loadItem: ActionCreator<UIAction> = () => {
  return { type: LOAD_ITEM, handledIn: TargetModule.EFFECT };
};

export const loadItemSuccess: ActionCreator<UIAction<itemInterfaces.Item>> = (item?: itemInterfaces.Item) => {
  return { type: LOAD_ITEM_SUCCESS, payload: item, handledIn: TargetModule.STORE };
};

export const loadPrevItemSuccess: ActionCreator<UIAction> = () => {
  return { type: LOAD_PREV_ITEM_SUCCESS, handledIn: TargetModule.STORE };
};

export const loadNextItemSuccess: ActionCreator<UIAction> = () => {
  return { type: LOAD_NEXT_ITEM_SUCCESS, handledIn: TargetModule.STORE };
};

export type ItemActions = LoadItem | LoadItemSuccessAction | LoadPrevItemSuccessAction | LoadNextItemSuccessAction;
