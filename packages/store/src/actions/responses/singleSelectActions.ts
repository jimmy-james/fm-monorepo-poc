import { ActionCreator } from 'redux';
import { MCSS_CLICK, MCSS_ELIMINATE, MCSS_CLEAR } from '../../actionTypes/responses/singleSelectActionTypes';
import { TargetModule, UIAction } from '../../../interfaces/stateMachine/UIAction';
import { Element, SelectedResponse } from '../../../interfaces/stateMachine/SelectedResponse';

// action type interfaces
export interface MCSSClickAction extends UIAction<SelectedResponse> {
  type: typeof MCSS_CLICK;
  payload: SelectedResponse;
  handledIn: TargetModule;
}

export interface MCSSEliminateAction extends UIAction<SelectedResponse> {
  type: typeof MCSS_ELIMINATE;
  payload: SelectedResponse;
  handledIn: TargetModule;
}

export interface MCSSClearAction extends UIAction<Element> {
  type: typeof MCSS_CLEAR;
  payload: Element;
}

// action creators
export const mcssClickAction: ActionCreator<UIAction<SelectedResponse>> = (payload: SelectedResponse) => {
  return { type: MCSS_CLICK, payload, handledIn: TargetModule.STORE };
};

export const mcssEliminateAction: ActionCreator<UIAction<SelectedResponse>> = (payload: SelectedResponse) => {
  return { type: MCSS_ELIMINATE, payload, handledIn: TargetModule.STORE };
};

export const mcssClearAction: ActionCreator<UIAction<Element>> = (input: Element) => {
  return { type: MCSS_CLEAR, payload: input, handledIn: TargetModule.STORE };
};

export type SingleSelectActions = MCSSClickAction | MCSSEliminateAction | MCSSClearAction;
