import { ActionCreator } from 'redux';
import { MCMS_CLICK, MCMS_ELIMINATE, MCMS_CLEAR } from '../../actionTypes/responses/multipleSelectActionTypes';
import { TargetModule, UIAction } from '../../../interfaces/stateMachine/UIAction';
import { Element, SelectedResponse } from '../../../interfaces/stateMachine/SelectedResponse';

// action type interfaces
export interface MCMSClickAction extends UIAction<SelectedResponse> {
  type: typeof MCMS_CLICK;
  payload: SelectedResponse;
  handledIn: TargetModule;
}

export interface MCMSEliminateAction extends UIAction<SelectedResponse> {
  type: typeof MCMS_ELIMINATE;
  payload: SelectedResponse;
  handledIn: TargetModule;
}

export interface MCMSClearAction extends UIAction<Element> {
  type: typeof MCMS_CLEAR;
  payload: Element;
  handledIn: TargetModule;
}

// action creators
export const mcmsClickAction: ActionCreator<UIAction<SelectedResponse>> = (payload) => {
  return { type: MCMS_CLICK, payload, handledIn: TargetModule.STORE };
};

export const mcmsEliminateAction: ActionCreator<UIAction<SelectedResponse>> = (payload) => {
  return { type: MCMS_ELIMINATE, payload, handledIn: TargetModule.STORE };
};

export const mcmsClearAction: ActionCreator<UIAction<Element>> = (inputId: Element) => {
  return { type: MCMS_CLEAR, payload: inputId };
};

export type MultipleSelectActions = MCMSClickAction | MCMSEliminateAction | MCMSClearAction;
