import { ActionCreator } from 'redux';
import {
  DROPDOWN_CLICK,
  DROPDOWN_SELECT,
  DROPDOWN_CLICK_OUTSIDE,
} from '../../actionTypes/responses/dropdownActionTypes';
import { UIAction, TargetModule } from '../../../interfaces/stateMachine/UIAction';
import { Element, SelectedResponse } from '../../../interfaces/stateMachine/SelectedResponse';

// action type interfaces
export interface DropdownClickAction extends UIAction<Element> {
  type: typeof DROPDOWN_CLICK;
  payload: Element;
  handledIn: TargetModule.STORE;
}

export interface DropdownSelectAction extends UIAction<SelectedResponse> {
  type: typeof DROPDOWN_SELECT;
  payload: SelectedResponse;
  handledIn: TargetModule.STORE;
}

export interface DropdownClickOutsideAction extends UIAction<Element> {
  type: typeof DROPDOWN_CLICK_OUTSIDE;
  payload: Element;
  handledIn: TargetModule.STORE;
}

// action creators
export const dropdownClickAction: ActionCreator<UIAction<Element>> = (input: Element) => {
  return { type: DROPDOWN_CLICK, payload: input };
};

export const dropdownSelectAction: ActionCreator<UIAction<SelectedResponse>> = (payload: SelectedResponse) => {
  return { type: DROPDOWN_SELECT, payload };
};

export const dropdownClickOutsideAction: ActionCreator<UIAction<Element>> = (input: Element) => {
  return { type: DROPDOWN_CLICK_OUTSIDE, payload: input };
};

export type DropdownActions = DropdownClickAction | DropdownSelectAction | DropdownClickOutsideAction;
