import { ActionCreator } from 'redux';
import {
  LOAD_BOOKLET_SUCCESS,
  LOAD_BOOKLET,
  POST_BOOKLET,
  POST_BOOKLET_SUCCESS,
} from '../actionTypes/bookletActionTypes';
import * as blockInterfaces from '../../interfaces/Block';
import { UIAction, TargetModule } from '../../interfaces/stateMachine/UIAction';

export interface LoadBooklet extends UIAction {
  type: typeof LOAD_BOOKLET;
  handledIn: TargetModule;
}

export interface LoadBookletSuccessAction extends UIAction<blockInterfaces.Block[]> {
  type: typeof LOAD_BOOKLET_SUCCESS;
  payload: blockInterfaces.Block[];
  handledIn: TargetModule;
}

export const loadBookletSuccess: ActionCreator<UIAction<blockInterfaces.Block[]>> = (
  blocks?: blockInterfaces.Block[],
) => {
  return { type: LOAD_BOOKLET_SUCCESS, payload: blocks, handledIn: TargetModule.STORE };
};
export const loadBooklet: ActionCreator<UIAction> = () => {
  return { type: LOAD_BOOKLET, handledIn: TargetModule.EFFECT };
};
//**********************  post test fro Block */
export interface PostBooklet extends UIAction {
  type: typeof POST_BOOKLET;
  handledIn: TargetModule;
}
export interface PostBookletSuccessAction extends UIAction<blockInterfaces.Block> {
  type: typeof POST_BOOKLET_SUCCESS;
  payload: blockInterfaces.Block;
  handledIn: TargetModule;
}
export const postBookletSuccess: ActionCreator<UIAction<blockInterfaces.Block>> = (block: blockInterfaces.Block) => {
  return { type: POST_BOOKLET_SUCCESS, payload: block, handledIn: TargetModule.STORE };
};
export const postBooklet: ActionCreator<UIAction<blockInterfaces.Block>> = (newBlock: blockInterfaces.Block) => {
  return { type: POST_BOOKLET, payload: newBlock, handledIn: TargetModule.EFFECT };
};

export default {
  loadBooklet,
};

export type BookletActions = LoadBooklet | LoadBookletSuccessAction;
